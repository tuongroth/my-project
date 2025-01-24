

# **Contact Management System - Backend Setup**

## **Steps to Set Up**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/tuongroth/my-project
cd my-project
Domains
my-project-kappa-neon.vercel.app
+1
my-project-git-main-tuongroths-projects.vercel.app
my-project-oo2a52m68-tuongroths-projects.vercel.app

```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Set Up Environment Variables**
Create a `.env` file with the following:
```env
MONGO_URI=mongodb+srv://fullstack:2r6FcH9cLQRdnXHJ@cluster0.xgr0xci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mysupersecretkey12345
```

### **Step 4: Start MongoDB**
Make sure MongoDB is running locally or use MongoDB Atlas.

### **Step 5: Start the Backend Server**
```bash
npm start
```
The server will run on `http://localhost:5000`.

### **Step 6: Test the API**
You can test the API with cURL or Postman.

- **GET** `/api/contacts`: Get all contacts
- **POST** `/api/contacts`: Add a new contact
- **PUT** `/api/contacts/:id`: Update a contact
- **DELETE** `/api/contacts/:id`: Delete a contact

#### Example cURL:
```bash
curl -X POST http://localhost:5000/api/contacts -d '{"name": "John Doe", "phone": "1234567890", "email": "john.doe@example.com", "address": "123 Main St"}' -H "Content-Type: application/json"
```

---

This guide should help you quickly set up and test the backend for the Contact Management System.





curl -X POST 'https://eu-west-2.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-zbmnuij/auth/providers/local-userpass/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "rothtrancattuong0703@gmail.com",
  "password": "123quenmatkhauu"
}'
