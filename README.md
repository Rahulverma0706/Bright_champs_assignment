# User Authentication System

A secure user authentication system built with Node.js, Express, and MongoDB using JWT.

✅ **Live Demo**: https://bright-champs-assignment.onrender.com

## Features

- User Registration
- User Login
- Password Reset
- JWT-based Authentication
- Password Hashing with bcryptjs
- Input Validation using express-validator

## Tech Stack

- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
- Mongoose
- JWT
- bcryptjs
- express-validator
- dotenv

## Setup Instructions (Local Development)

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

## Deployed Version (Render)

This project is deployed on Render.

🌐 **Base URL**: https://bright-champs-assignment.onrender.com

## API Endpoints

### 🔹 Register a new user

- **POST** `/api/auth/register`  
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
🔹 Login
POST /api/auth/login

Request Body:

json
Copy
Edit
{
  "email": "john@example.com",
  "password": "password123"
}
🔹 Reset Password
POST /api/auth/reset-password

Request Body:

json
Copy
Edit
{
  "email": "john@example.com"
}
Notes
Input validation is done using express-validator.

Passwords are hashed securely using bcryptjs.

JWT is used to manage authenticated sessions.

Can be extended with protected routes and email integration.

License
MIT

yaml
Copy
Edit

---

✅ You're all set to paste this into your `README.md` on GitHub.

Let me know if you want a frontend added, protected routes example, or deployment tips for production!







