upstream web_upstream {
  server nextjs:3000;
}

server {
  listen 80;

  server_name ciclosoluciones.com www.ciclosoluciones.com;

  server_tokens off;
  rewrite_log on;

  gzip on;
  gzip_proxied any;
  gzip_comp_level 4;
  gzip_types text/css application/javascript image/svg+xml;

  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;

  location / {
    proxy_pass http://web_upstream;
  }

  location /main {
    rewrite ^/main/(.*)$ /$1 break;

    proxy_pass http://web_upstream;
  }

  location /_next/static {
    proxy_cache STATIC;

    proxy_pass http://web_upstream;
  }

  location /static {
    proxy_cache STATIC;
    proxy_ignore_headers Cache-Control;
    proxy_cache_valid 60m;

    proxy_pass http://web_upstream;
  }
}
