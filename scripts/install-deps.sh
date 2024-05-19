#!/bin/sh
set -e
GO111MODULE=on GOBIN=/usr/local/bin go install \
  github.com/bufbuild/buf/cmd/buf@v1.0.0
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.4.0 github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.4.0
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26.0
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.0.0
go install github.com/envoyproxy/protoc-gen-validate@v0.6.1
