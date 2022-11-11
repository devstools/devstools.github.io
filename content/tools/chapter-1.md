---
title: "Chapter 1"
date: 2022-11-11T11:58:53+07:00
draft: false
title: "Chapter I: API Testing PostMan"
---

Postman: I think if you working in major software development you can hear this name atleast one times
Because this tool help you can call api and have many function have you checking what happen when you call api.

Today I will talk about some function I wish I know it soon.

If you want to create object user by calling api user and random name of user.
you can write in postman:

>{
>    "username": "{{$randomFullName}}"
>    "age": "{{$randomAge}}"
>}


there are many different variable in document you can check it [here](https://learning.postman.com/docs/writing-scripts/script-references/variables-list/)

