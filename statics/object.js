let user = {
    name:"koji",
    drink: "mugi-tea",
    amount:30,
    isTea: true,
    skill:"program",
    "likes birds": true,

};

let person = "koji";
let drink = "mugu-tea";
let amount = 30;
let isTea = true;

console.log(user.name);

user.skill = "program";

console.log(user.skill);

let animal = {};
animal["likes birds"] = true;

console.log("user",user["likes birds"]);
console.log("animal=",animal["likes birds"]);
