---
date: 2022-11-11T11:44:56+07:00
draft: false
description: "Development"
featured_image: "/images/banner.png"
tags: ["development"]
title: "Chapter I: Development"
---

Hi, today I want to talk about SOLID in developement software this is the first lesson my boss teach me and tell me,
if you want to go far in major software development. You have knowledge about SOLID and alway follow SOLID Principle.

1 - S: Single Responsibility Principle
- As the name of this principle, one class has only one responsibility and one reason to update code in a class is the client change business. So you have to re-write code

2 - O: Open and Close Principle
- Open is mean Open for extend and Close for modification, you should NOT edit the old code, and should extend from it, because if you edit old code so you can make a problem with somewhere call this code. And you will find that problem and resolve it. waste time, and cost.

3 - L: Liskov's Subsitution Principle
- This principle tell you, if you create a child class extend from parent class, so the children class can replace any where parent class has called. And code run perfect, if it not work you have been violent this principle

4 - I: Interface Segregation Principle
- One interface should not have too much method, one interface should have group method related to each other.

5 - D: Dependency Inversion Principle
- The high-level module should not depend on low-level module, They should depend on abstraction. How is high-level module, How is low-level module. I read a defination somewhere and I think It enough for you know how is that. High-level module is mean a module depend on a other module is high-level module. And low-level module is opposite high-level module. Low-level module not depend on a other module.

