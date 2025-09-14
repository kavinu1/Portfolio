# Use Nginx as the base image
FROM nginx:alpine

# Copy website files into nginx’s default public directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
