

# **Contact Management System - Backend Setup**


# Backend Setup Guide

## Step 1: Clone the Repository
Clone the project repository to your local machine:
```bash
git clone https://github.com/your-username/your-repository.git](https://github.com/tuongroth/my-project
cd your-repository/backend
```

## Step 2: Install Dependencies
Install the necessary dependencies by running the following command in the backend directory:
```bash
npm install
```

## Step 3: Set Up Environment Variables
Create a `.env` file in the backend directory and add the following environment variables:

```env
MONGO_URI=mongodb+srv://fullstack:2r6FcH9cLQRdnXHJ@cluster0.xgr0xci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mysupersecretkey12345
```

- `MONGO_URI`: Your MongoDB connection string (you can use MongoDB Atlas for remote databases).
- `JWT_SECRET`: A secret key used to sign JSON Web Tokens for authentication.

## Step 4: Start MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas for a cloud database.
- If running locally, make sure MongoDB is properly installed and the server is started.
- If using MongoDB Atlas, no further steps are required as it is a cloud-based service.

## Step 5: Start the Backend Server
Run the following command to start the backend server:
```bash
npm start
```
The server will run at `http://localhost:5000`.

## Step 6: Test the API
You can test the backend API using tools like cURL or Postman. Here are the API endpoints:

- **GET /api/contacts**: Get all contacts
- **POST /api/contacts**: Add a new contact
- **PUT /api/contacts/:id**: Update a contact
- **DELETE /api/contacts/:id**: Delete a contact

### Example cURL Request:
To add a new contact, use the following cURL command:
```bash
curl -X POST http://localhost:5000/api/contacts -d '{"name": "John Doe", "phone": "1234567890", "email": "john.doe@example.com", "address": "123 Main St"}' -H "Content-Type: application/json"
```

## Step 7: Test Login API (Optional)
If your backend includes authentication, you can test the login API with this cURL request:
```bash
curl -X POST 'https://eu-west-2.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-zbmnuij/auth/providers/local-userpass/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{ "username": "rothtrancattuong0703@gmail.com", "password": "123quenmatkhauu" }'
```
