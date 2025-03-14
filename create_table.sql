-- Create the demo_requests table for storing user subscription requests
CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  subscribe_to_newsletter BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS demo_requests_email_idx ON demo_requests(email);

-- Enable Row Level Security (RLS)
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from authenticated and anonymous users
CREATE POLICY "Allow anonymous inserts" ON demo_requests 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that only allows the owner to view their own data
CREATE POLICY "Only allow owners to view their data" ON demo_requests 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE email = demo_requests.email));

-- Create a trigger to update the updated_at column
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_demo_requests_updated_at
BEFORE UPDATE ON demo_requests
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();
