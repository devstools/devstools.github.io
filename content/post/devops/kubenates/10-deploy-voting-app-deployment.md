---
description: "kubenates"
title: "Deploy k8s"
date: 2022-11-11T11:43:56+07:00
featured_image: "/images/development.png"
tags: ["kubenetes"]
---

## Deploy Voting App Kubenates Deployment

### voting-app-deployment.yaml

```
apiVersion: v1
kind: Deployment
metadata:
  name: voting-app-deploy
  labels:
    name: voting-app-deploy
    app: demo-voting-app
spec:
  replicas: 1
  selector:
    matchLabels:
      name: voting-app-pod
      app: demo-voting-app
  template:
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

### redis-deployment.yaml

```
apiVersion: v1
kind: Deployment
metadata:
  name: redis-deploy
  labels:
    name: redis-deploy
    app: demo-voting-app
spec:
  replicas: 1
  selector:
    matchLabels:
      name: redis-deploy
      app: demo-voting-app
  template:
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

### postgres-deployment.yaml

```
apiVersion: v1
kind: Deployment
metadata:
  name: postgres-deploy
  labels:
    name: postgres-deploy
    app: demo-voting-app
spec:
  replicas: 1
  selector:
    matchLabels:
      name: postgres-deploy
      app: demo-voting-app
  template:
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

### worker-app-deployment.yaml

```
apiVersion: v1
kind: Deployment
metadata:
  name: worker-app-deploy
  labels:
    name: worker-app-deploy
  > app: demo-voting-app
spec:
  replicas: 1
  selector:
    matchLabels:
      name: worker-app-pod
      app: demo-voting-app
  template:
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

### result-app-deployment.yaml

```
apiVersion: v1
kind: Deployment
metadata:
  name: result-app-deploy
  labels:
    name: result-app-deploy
  > app: demo-voting-app
spec:
  replicas: 1
  selector:
    matchLabels:
      name: result-app-pod
      app: demo-voting-app
  template:
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

### Run Command

kubectl get pods
kubectl get svc

kubectl create -f voting-app-deploy.yaml
kubectl create -f redis-deploy.yaml
kubectl create -f postgres-deploy.yaml
