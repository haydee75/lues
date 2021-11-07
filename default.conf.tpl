client_max_body_size 100M;

server {
    listen       80;
    listen       [::]:80;  # IPv6
    server_name  lues.fr;

    return       301 https://$server_name$request_uri;
}

server {
    listen       443 ssl http2;
    listen       [::]:443 ssl http2;  # IPv6
    server_name  lues.fr;

    location / {
        root     /usr/share/nginx/html;
        index    index.html index.htm;
    }

    # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/lues.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/lues.fr/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
