# Use an appropriate base image depending on your backend requirements
FROM node:14

# Set working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port your backend app runs on
EXPOSE 3000

# Command to run the backend service
CMD ["npm", "start"]
