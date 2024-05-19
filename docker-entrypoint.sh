#!/bin/sh
set -e
buf lint && buf generate
swagger-merger -i apis/api.json -o public/swagger/apis.json
