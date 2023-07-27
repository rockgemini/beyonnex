# Use the official Cypress image with Chrome and Node.js
FROM cypress/browsers:node16.16.0-chrome107-ff107-edge

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container's working directory
COPY . .

# Expose the port that your Cypress server runs on (usually 3000)
EXPOSE 3000
