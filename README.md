

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





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
