---
date: 2017-04-09T10:58:08-04:00
description: "golang"
featured_image: "/images/banner.png"
tags: ["golang"]
title: "Chapter I: golang"
---

## Install Golang

### Windows

- Go to website and download the latest Golang version: https://go.dev/doc/install

- Install

- Setting GOPATH Environment

Environmental Variables under Control Panel > System and Security > System > Advanced Settings > Environmental Variables

### Syntax

Each Statement ends with a line break.

To comment block code
'''
/* 
This is block comment in go
*/
'''

Comment line

'''
// This is single line comment
'''

Function
'''
func Display() {
    fmt.Println(SayHi("Trongpq"))
}

func SayHi(name string) {
    msg := fmt.Sprintf("Hello, %v. Welcome!", name)
    return msg
}
'''

