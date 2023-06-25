# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/
# Replace default nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf


COPY ./sites-available/www.ciclosoluciones.com /etc/nginx/sites-available/www.ciclosoluciones.com

RUN mkdir -p /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/www.ciclosoluciones.com /etc/nginx/sites-enabled/www.ciclosoluciones.com


# Expose the listening port
EXPOSE 80
# Test default.conf
# RUN nginx -t

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]