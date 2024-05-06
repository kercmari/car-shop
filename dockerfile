
FROM node:18


WORKDIR /app


COPY package*.json ./

# Install dependencies
RUN npm install --only=prod

COPY . .

EXPOSE 3000


CMD ["npm", "start"]
