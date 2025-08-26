#Use an official node runtime as the base image
FROM node:18-alpine as build

#Set the working directory in the container
WORKDIR /app

#Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./ 

#Install the project dependencies
RUN npm install

#Copy the rest of the application code to the working directory
COPY . .

#Build the React application for production
RUN npm run build

#Use an official nginx image to serve the built application
FROM nginx:alpine

#Copy the built application from the build stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

#Expose port 80 to the outside world
EXPOSE 80

#Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]