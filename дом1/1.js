//дз
styles = ["Джаз","Блюз"]

styles.push("Рок-н-рол")

styles[Math.ceil((styles.length-1)/2)] = "Классика"
console.log(styles)

console.log(styles[0])
styles.shift()

styles.unshift("Рэп")
styles.unshift("Регги")
console.log(styles)


//12 задач

//1
for(i=1; i<100;i++)
{
    console.log(i)
}
//2
for (i = 100; i > 0; i--)
{
    console.log(i)
}
//3
for (i = 2; i < 100; i+=2)
{
    console.log(i)
}
//4
arry = []
while (arry.length < 10)
{
    arry.push("x")
}
console.log(arry)
//5
arry1 = []
while (arry1.length < 10)
{
    let num = Math.round(Math.random()*100)/100
    arry1.push(num)
}
console.log(arry1)
//6
arry1 = []
while (arry1.length < 10)
{
    let num = Math.random()
    arry1.push(num)
}
console.log(arry1)
//7
let start = 0;
let end = 10;
let mass = [];
while (mass.length < 10)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
console.log(mass)
//8
let start = 0;
let end = 10;
let mass = [];
while (mass.length < 10)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
console.log(mass)
for (i of mass)
{
    if (i > 0 && i < 10)
    {
        console.log(i)
    }
}
//9
let start = 0;
let end = 10;
let mass = [];
while (mass.length < 10)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
console.log(mass)
for (i of mass)
{
    if ( i == 5 ) 
    {
        console.log("Есть")
        break;
    }
}
//10
let start = 0;
let end = 10;
let mass = [];
while (mass.length < 10)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
console.log(mass)
let sum = 0
for (i of mass)
{
    sum +=i
}
console.log(sum)
//11
let start = 0;
let end = 10;
let mass = [];
while (mass.length < 10)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
console.log(mass)
let sum = 0
for (i of mass)
{
    sum +=i**2
}
console.log(sum)
//12
let start = 0;
let end = 10;
let mass = [];
while (mass.length < 10)
{   
    let num = Math.round(Math.random()*Math.abs(start-end) + Math.min(start,end));
    mass.push(num);
}
console.log(mass)
let sum = 0
for (i of mass)
{
    sum +=i
}
console.log(sum/mass.length)