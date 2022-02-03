let start = 0;
let end = 100;
let count = 100;
let mass = [];
while (mass.length < count)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
do {let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
} while(mass.length < count-1){
}
console.log(mass)