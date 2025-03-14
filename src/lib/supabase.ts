import { createClient } from "@supabase/supabase-js";

// Use the provided credentials
const supabaseUrl = "https://cutaeylykggqbgpygjyf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dGFleWx5a2dncWJncHlnanlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MzQ4NTksImV4cCI6MjA1NzUxMDg1OX0.wFzYJpzMFgakv6DiJZzXWeVxbTUIBl1Ed9A4YL0GW9Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for authentication
export const signUp = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password });
};

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  return await supabase.auth.getUser();
};

// Helper functions for demo requests
export const submitDemoRequest = async (data: {
  name: string;
  email: string;
  company?: string;
  message?: string;
  subscribe_to_newsletter: boolean;
}) => {
  return await supabase.from("demo_requests").insert([
    {
      ...data,
      created_at: new Date().toISOString(),
    },
  ]);
};

export const getDemoRequests = async () => {
  return await supabase
    .from("demo_requests")
    .select("*")
    .order("created_at", { ascending: false });
};
