---
description: "kubenates"
title: "Deploy k8s"
date: 2022-11-11T11:43:56+07:00
featured_image: "/images/development.png"
tags: ["kubenetes"]
---

## Deploy Voting App Kubenates

### voting-app-pod.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: voting-app-pod
  labels:
    name: voting-app-pod
    app: demo-voting-app
spec:
  containers:
    - name: voting-app
    image: kodekloud/examplevotingapp_vote:v1
    ports:
      - containerPort: 80
```

### result-app-pod.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: result-app-pod
  labels:
    name: result-app-pod
  > app: demo-voting-app
spec:
  containers:
    - name: result-app
    image: kodekloud/exampleresultapp_vote:v1
    ports:
      - containerPort: 80
```

### redis-app-pod.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: redis-pod
  labels:
    name: redis-pod
  > app: demo-voting-app
spec:
  containers:
    - name: redis
    image: redis
    ports:
      - containerPort: 6379
```

### postgres-app-pod.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: postgres-pod
  labels:
    name: postgres-pod
  > app: demo-voting-app
spec:
  containers:
    - name: postgres
    image: postgres
    ports:
      - containerPort: 5432
    env:
      - name: POSTGRES_USER
        value: "postgres"
      - name: POSTGRES_PASSWORD
        value: "postgres"
```

### worker-app-pod.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: worker-app-pod
  labels:
    name: worker-app-pod
  > app: demo-voting-app
spec:
  containers:
    - name: worker-app
    image: kodekloud/examplevotingapp_vote:v1
```

### redis-service.yaml

```
apiVersion: v1
kind: Service
metadata:
  name: redis
  labels:
    name: redis-service
  > app: demo-voting-app
spec:
  ports:
    - port: 6379
      targetPort: 6379
    selector:
      name: redis-pod
      app: demo-voting-app
```

### postgres-service.yaml

```
apiVersion: v1
kind: Service
metadata:
  name: db
  labels:
    name: postgres-service
  > app: demo-voting-app
spec:
  ports:
    - port: 5432
      targetPort: 5432
    selector:
      name: postgres-pod
    > app: demo-voting-app
```

### voting-app-service.yaml

```
apiVersion: v1
kind: Service
metadata:
  name: voting-service
  labels:
    name: voting-service
  > app: demo-voting-app
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30004
    selector:
      name: voting-app-pod
    > app: demo-voting-app
```

### result-app-service.yaml

```
apiVersion: v1
kind: Service
metadata:
  name: result-service
  labels:
    name: result-service
  > app: demo-voting-app
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30005
    selector:
      name: voting-app-pod
    > app: demo-voting-app
```

## Run Command

kubectl create -f voting-app-pod.yaml
kubectl create -f voting-app-service.yaml

> kubectl get pod,svc

Get URL

> minikube service voting-service --url

kubectl create -f redis-pod.yaml
kubectl create -f redis-service.yaml

> kubectl get pod,svc

kubectl create -f postgres-pod.yaml
kubectl create -f postgres-service.yaml

> kubectl get pod,svc

kubectl create -f worker-app-pod.yaml

kubectl create -f result-pod.yaml
kubectl create -f result-service.yaml

> minikube service result-service --url
