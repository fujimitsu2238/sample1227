"use strict"

let user = {
    name:"jhon",
};

Object.defineProperty(user,"name",{
    writable:false
});

user.name = "pete"

console.log(user.name);
