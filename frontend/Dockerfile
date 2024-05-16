FROM node:14

# Set working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose the port your frontend app runs on (if needed)
EXPOSE 3000

# Command to run the frontend service
CMD ["npm", "start"]
