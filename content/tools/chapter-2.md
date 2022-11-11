---
title: "Chapter 2"
date: 2022-11-11T12:07:25+07:00
draft: false
---

How many tester can send multi request in the same time, this issue I meet when I work in my old company,

We don't know to test performance send multi request same time by CLI or by Code. And I don't know keyword to find it. 
Now I find a tool can help me do it. Auto cannon

You can install it from npm. 
https://www.npmjs.com/package/autocannon

npm i -g autocannon

example

autocannon https://localhost:3000/ -d 10 -c 30 -w 3

-d duration 
-c connection
-w worker

this command is mean send 30 request by 3 worker during 10s, sever will receive 3 request same time
