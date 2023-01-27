FROM node:16

# Working directory

WORKDIR /backend

# Copy and download dependecies
COPY package.json ./
RUN npm install

# Copy the source files into the image
COPY . .
# Expose the port 5000
EXPOSE 5000

CMD npm start