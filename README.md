# KozmoAI Website

A modern website for KozmoAI, built with React, TypeScript, and Vite.

## Features

- Responsive design with dark theme
- Interactive UI components
- Cal.com integration for booking demos
- Animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/kozmoai-website.git
cd kozmoai-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

Copy the example environment file and update it with your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Cal.com credentials:

```
VITE_CAL_API_KEY=your_cal_com_api_key_here
VITE_CAL_ACCOUNT_ID=your_cal_com_account_id_here
VITE_CAL_BASE_URL=https://api.cal.com/v1
VITE_CAL_USERNAME=your_cal_com_username
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

## Cal.com Integration

This project includes integration with Cal.com for the "Book a Demo" functionality. The integration uses Cal.com's embedding approach to display a booking widget in a modal.

### Setup Instructions

1. Create an account on [Cal.com](https://cal.com/)
2. Set up your availability and create an event type for demos
3. Add your Cal.com credentials to the environment variables as described below

### Environment Variables

#### For Widget Embedding (Currently Used)

- `VITE_CAL_USERNAME`: Your Cal.com username (e.g., "digitransinc")
- `VITE_CAL_EVENT_NAME`: The event name in your Cal.com account (e.g., "demo-kozmoai")

#### For API Integration (Optional, for Future Use)

If you plan to use the Cal.com API directly:

- `VITE_CAL_API_KEY`: Your Cal.com API key from Settings > Developer Settings > API Keys
- `VITE_CAL_ACCOUNT_ID`: Your Cal.com account ID
- `VITE_CAL_BASE_URL`: The base URL for Cal.com API (default: https://api.cal.com/v1)

### How It Works

The current implementation embeds the Cal.com booking widget using an iframe with the URL format:
```
https://cal.com/[username]/[event-name]?embed=true&hideBranding=true&layout=month_view
```

This approach doesn't require API keys as it directly embeds the public booking page.

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting provider.

Make sure to set the environment variables in your production environment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
