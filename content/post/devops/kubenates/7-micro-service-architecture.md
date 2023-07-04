---
description: "kubenates"
title: "Microservice Architecture"
date: 2022-11-11T11:43:56+07:00
featured_image: "/images/development.png"
tags: ["kubenetes"]
---

## Microservice Architecture

### docker run --links

```
docker run -d --name=redis redis
docker run -d --name=db postgres:9.4
docker run -d --name=vote -p 5000:80 --link redis:redis voting-app
docker run -d --name=result -p 5001:80 --link db:db result-app
docker run -d --name=worker --link redis:redis --link db:db worker
```
