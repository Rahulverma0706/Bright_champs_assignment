# User Authentication System

A secure user authentication system built with Node.js, Express, and MongoDB using JWT.

🔗 **Live Demo**: [https://bright-champs-assignment.onrender.com](https://bright-champs-assignment.onrender.com)

---

## 🚀 Features

- ✅ User Registration  
- 🔐 User Login  
- 🔁 Password Reset  
- 🛡️ JWT-based Authentication  
- 🔒 Password Hashing with bcryptjs  
- ✅ Input Validation using express-validator  

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT, bcryptjs  
- **Validation**: express-validator  
- **Environment Management**: dotenv  

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/auth-system.git
cd auth-system
2. Install dependencies
bash

npm install
3. Add environment variables
Create a .env file in the root directory:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run the server
bash
npm start
Server runs at: http://localhost:5000

🌐 Deployed Version
The backend is deployed using Render.

🔗 Base URL: https://bright-champs-assignment.onrender.com

📮 API Endpoints
🔸 Register a new user
POST /api/auth/register
Body:

json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
🔸 Login
POST /api/auth/login
Body:

json
{
  "email": "john@example.com",
  "password": "password123"
}
🔸 Reset Password
POST /api/auth/reset-password
Body:

json
{
  "email": "john@example.com"
}
📝 Notes
Inputs are validated using express-validator.

Passwords are hashed using bcryptjs before storage.

JWT is used to generate and validate secure tokens.

The backend is fully modular and scalable.

📄 License
This project is licensed under the MIT License.

yaml

---

✅ Just replace `YOUR_USERNAME` in the GitHub link if needed, paste this into `README.md`, and your repo will look professional and clean!


