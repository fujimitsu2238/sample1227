let user = {
    name:"john",
    age: 30,
    isAdmin: true,
};

let person = "fujisawa";

for(let key in user) {
    console.log( user[key] )
}

let admin = user ;

admin.name = 'pete';

console.log("name is",user.name);
