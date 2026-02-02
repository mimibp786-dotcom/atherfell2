# Use Node.js
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy backend files
COPY backend ./backend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Expose backend port
EXPOSE 8000

# Start backend server
CMD ["node", "index.js"]
