FROM golang:1.16.14 as grpc-builder
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.4.0 && \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.4.0  && \
    go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26.0 && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.0.0 && \
    go install github.com/envoyproxy/protoc-gen-validate@v0.6.1


FROM node:14.19.0 as openapi-merger
ARG BIN_DIR=/usr/local/bin
ARG BUF_BINARY_NAME=buf
ARG BUF_VERSION=1.0.0
ARG PROTOC_VERSION=3.18.1
RUN npm install -g swagger-merger && \
    curl -sSL "https://github.com/bufbuild/buf/releases/download/v${BUF_VERSION}/${BUF_BINARY_NAME}-$(uname -s)-$(uname -m)" -o "${BIN_DIR}/${BUF_BINARY_NAME}" && chmod +x "${BIN_DIR}/${BUF_BINARY_NAME}" && \
    curl -sSL "https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip" -o protoc.zip && unzip protoc.zip && chmod +x bin/protoc && mv bin/protoc /usr/local/bin/protoc
COPY --from=grpc-builder /go/bin/protoc-gen-grpc-gateway /usr/local/bin
COPY --from=grpc-builder /go/bin/protoc-gen-openapiv2 /usr/local/bin
COPY --from=grpc-builder /go/bin/protoc-gen-go /usr/local/bin
COPY --from=grpc-builder /go/bin/protoc-gen-go-grpc /usr/local/bin
COPY --from=grpc-builder /go/bin/protoc-gen-validate /usr/local/bin
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT [ "/docker-entrypoint.sh" ]
