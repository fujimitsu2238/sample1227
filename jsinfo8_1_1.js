let animal = {
    eats: true,
    walk(){
        console.log("Animal walk");        
    }
};

let rabbit = {
    jumps: true,
    __proto__:animal
};

let longEar = {
    earLength:10,
    __proto__:rabbit
};

rabbit.__proto__ = animal;

longEar.walk();

console.log(longEar.jumps);



