let user = {
    firstName: "john",
    sayHi(){
        console.log(`Hello,${this.fistName}!`);

    }
}

setTimeout (function(){
    user.sayHi();
},1000);

