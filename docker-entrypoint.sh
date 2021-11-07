#!/usr/bin/env sh
set -eu

envsubst '${SERVER_NAME} ${SERVER_NAME}' < /etc/nginx/conf.d/default.conf.tpl > /etc/nginx/conf.d/default.conf

exec "$@"

