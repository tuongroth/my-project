# Chọn image Node.js 14 làm base image
FROM node:14

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies cho backend
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 5000 để ứng dụng backend có thể tiếp nhận yêu cầu
EXPOSE 5000

# Lệnh chạy ứng dụng khi container khởi động
CMD ["npm", "start"]
