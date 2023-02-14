let fruits = ["apple","orange","plam"];

console.log( "fruits[0] is",fruits[0] );

fruits[2] = "pear"

fruits[3] = "lemon";

console.log( "fruits[2] is",fruits[2] );

console.log( "fruits[3] is",fruits[3]);

console.log( "fruits is",fruits.length);

console.log( "fruits array is",fruits );

let mixArr = ["Apple",{name:"john"}, true,function(){console.log("Hello")}];

console.log( mixArr[1].name);
console.log( mixArr[3]());

for (let 1 =0;1< fruits.length;i++){
    console.log( fruits[1]);
}

for( let fruits of fruits){
    console.log( fruits);
}