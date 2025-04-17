User Authentication System
A secure user authentication system built with Node.js, Express, and MongoDB using JWT.

Live Demo: https://bright-champs-assignment.onrender.com

Features
User Registration

User Login

Password Reset

JWT-based Authentication

Password Hashing with bcryptjs

Input Validation using express-validator

Tech Stack
Node.js, Express.js, MongoDB (via MongoDB Atlas), Mongoose, JWT, bcryptjs, express-validator, dotenv

Setup Instructions (Local Development)
Clone the repository:
git clone https://github.com/YOUR_USERNAME/auth-system.git
cd auth-system

Install dependencies:
npm install

Create a .env file in the root directory with the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server:
npm start
Server will run at: http://localhost:5000

Deployed Version
Hosted on Render:
Base URL: https://bright-champs-assignment.onrender.com

API Endpoints
Register a new user
POST /api/auth/register
Body: { "name": "John Doe", "email": "john@example.com", "password": "password123" }

Login
POST /api/auth/login
Body: { "email": "john@example.com", "password": "password123" }

Reset Password
POST /api/auth/reset-password
Body: { "email": "john@example.com" }

Notes
All inputs are validated using express-validator

Passwords are securely hashed using bcryptjs

JWT is used for secure session handling

Easily extendable with protected routes and email functionality

License
MIT

