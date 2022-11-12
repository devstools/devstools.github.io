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

Variable

'''
var variable-name datatype = value
'''

Condition

'''
if(condition) {
    //code block to be executed when if condition evaluates to true
} 
'''

Switch Case

'''
switch expression {
	case 1:
		//code block 1
	case 2:
		//code block 2
	case 3:
		//code block 3
	default:
		//default code block
}  
'''

Loop

'''
for initialization; condition; increment {
//code block

}

for num, val := range myArray {
    // statements
}
'''


Function 

'''

'''
Function
'''
func functionName ([inputParameters]) [returnType] {
	//function body
} 
'''

Array

'''
var arrayName[length] datatype
var arrayName = [length] datatype{ values }
var arrayName = [...] datatype{ values }
'''

Slice

'''
sliceName := []datatype { value1, value2, value3,...valueN }
'''

Struct 

'''
type <struct_name> struct {
    <field_name1> datatype
    <field_name2> datatype
    <field_name3> datatype
    ...
    <field_nameN> datatype
}
'''

Function In Struct

'''
package main

import "fmt"

type Student struct {
	id int
	name string
	grade int
}

func (s Student) Display(){
	fmt.Println(s)
}

func main() {
    var s2 = Student{2, "Steffi", 10} 
    s2.Display()

    var s3 = Student{id:3, name:"Steve" } 
    s3.Display() //output: {3 Steve 0}
}

'''

Map

'''
// Using var keyword
var mymap = map[TypeOfKey] TypeOfValue { key1:value1, key2:value2,...}

// shorthand syntax
mymap :=  map[TypeOfKey] TypeOfValue { key1:value1, key2:value2,...}
'''

Pointer

'''
var mypointer *int
'''