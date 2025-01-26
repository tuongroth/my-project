// .env should be loaded as the very first thing
require('dotenv').config();

// Import các thư viện và module cần thiết
const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

// Tạo đối tượng Express app
const app = express();

// Middleware để parse JSON request body
app.use(express.json());

// Kết nối với cơ sở dữ liệu MongoDB
connectDB();

// Định nghĩa các route API
app.use('/api/contacts', contactRoutes);

// Xử lý lỗi toàn cục
app.use(errorHandler);

// Lắng nghe yêu cầu từ client
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
