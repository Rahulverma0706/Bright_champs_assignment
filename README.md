# Bright_champs_assignment# User Authentication System

This is a simple User Authentication System built with Node.js, Express, and MongoDB, using JWT for secure user login. It includes user registration, login, and password reset functionalities with input validation and error handling.

Step-by-Step Setup Guide:

1. Clone the Repository:
   git clone https://github.com/YOUR_USERNAME/auth-system.git
   cd auth-system

2. Install Dependencies:
   npm install

3. Create a .env file in the root directory and add the following:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

   Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., from MongoDB Atlas), and `your_jwt_secret` with a strong secret key.

4. Start the Server:
   npm start

   The server will run on http://localhost:5000

5. Test API Endpoints using Postman:

   ➤ Register a new user:
   Method: POST
   URL: http://localhost:5000/api/auth/register
   Body (JSON):
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "password123"
   }

   ➤ Login a user:
   Method: POST
   URL: http://localhost:5000/api/auth/login
   Body (JSON):
   {
     "email": "john@example.com",
     "password": "password123"
   }

   ➤ Reset Password:
   Method: POST
   URL: http://localhost:5000/api/auth/reset-password
   Body (JSON):
   {
     "email": "john@example.com"
   }

6. Tech Stack and Tools Used:
   - Express: For creating routes and API endpoints.
   - Mongoose: For interacting with MongoDB.
   - bcryptjs: To hash passwords before storing them.
   - jsonwebtoken: To generate and verify JWT tokens.
   - express-validator: To validate user inputs (like checking for valid email or password length).
   - dotenv: To manage environment variables.

7. Notes:
   - Do not push the .env file to GitHub. If it's already committed, remove it like this:
     git rm --cached .env
     echo ".env" >> .gitignore
     git commit -m "Removed .env and updated .gitignore"
     git push

   - Keep your JWT secret and Mongo URI private.

8. Optional: Git Commands for First Commit
   git init
   git remote add origin https://github.com/YOUR_USERNAME/auth-system.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main

This guide should get your backend auth system up and running quickly. All endpoints can be tested with Postman.
