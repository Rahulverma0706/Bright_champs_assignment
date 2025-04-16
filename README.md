# User Authentication System

A secure and minimal user authentication system built with Node.js, Express, and MongoDB using JWT.

## Features

- User Registration
- User Login
- Password Reset
- JWT-based Authentication
- Password Hashing with bcryptjs
- Input Validation with express-validator

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcryptjs
- express-validator
- dotenv

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/YOUR_USERNAME/auth-system.git  
   cd auth-system

2. Install dependencies:

   npm install

3. Create a `.env` file in the root directory with the following:

   PORT=5000  
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_jwt_secret

4. Start the server:

   npm start

   Server will run at: http://localhost:5000

## API Endpoints

### ➤ Register

- **POST** `/api/auth/register`  
- **Body**:
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }

### ➤ Login

- **POST** `/api/auth/login`  
- **Body**:
  {
    "email": "john@example.com",
    "password": "password123"
  }

### ➤ Reset Password

- **POST** `/api/auth/reset-password`  
- **Body**:
  {
    "email": "john@example.com"
  }

## Notes

- All inputs are validated using `express-validator`.
- Passwords are hashed using `bcryptjs`.
- JWT is used to manage user sessions securely.
- Extendable with protected routes and email services.

## License

MIT
