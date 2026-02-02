# Use Node 18
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend package.json and install dependencies
COPY backend/package.json .
RUN npm install

# Copy backend source code
COPY backend .

# Start the backend server
CMD ["node", "index.js"]
