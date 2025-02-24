# Refer & Earn System

A full-stack MERN application that enables users to refer courses to friends and earn rewards.


## Overview

This application provides a responsive and user-friendly Refer & Earn landing page with functionality for users to refer courses to friends. The system captures referrer and referee information, stores it in a MySQL database, and sends email notifications using Google Mail Service API.

## Features

- Responsive Refer & Earn landing page
- Modal popup with referral form
- Form validation for all required fields
- REST API endpoints for handling referral data
- MySQL database integration using Prisma ORM
- Email notifications using Google Mail Service API
- Comprehensive error handling

## Tech Stack

### Frontend
- React.js
- Material-UI / Tailwind CSS
- Axios for API requests
- React Hook Form (for form validation)

### Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL
- Google Mail Service API



## Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Fill in the .env file with your configuration

# Run Prisma migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## Configuration

### Environment Variables

Create a `.env` file in the server directory with the following variables:

```
# Database
DATABASE_URL="mysql://username:password@localhost:3306/refer_earn_db"

# Google Mail Service
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Server
PORT=5000
NODE_ENV=development
```



## Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the React application:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `build` folder to Vercel or Netlify

### Backend Deployment (Heroku)
1. Create a Procfile in the server directory:
   ```
   web: node src/server.js
   ```
2. Deploy to Heroku:
   ```bash
   cd server
   heroku create refer-earn-api
   git push heroku main
   ```

## Testing

### Frontend Testing
```bash
cd client
npm test
```

### Backend Testing
```bash
cd server
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
