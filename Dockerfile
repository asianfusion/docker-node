# Install the base requirements for the app.
# This stage is to support development.
FROM node:16
WORKDIR /app
COPY server/package*.json ./
RUN ls -al
RUN npm install
COPY server .
ENTRYPOINT npm run start