"use strict"
function filter(mass,property,meaning){
    for(let i = 0; i < mass.length; i++){
        for(let prop in mass[i]){
            if (mass[i][prop] == meaning && prop == property){
                mass_otvet.push(mass[i])
                console.log(mass_otvet)
                break;
            }
            
        }
    }
    if(mass_otvet==0){console.log("Ничего не найдено")}
}

let objects = [
    { name: "Василий", surname: "Васильев" },
    { name: "Иван", surname: "Иванов" },
    { name: "Пётр", surname: "Петров" }
]

let mass_otvet = []

let result = filter(objects, "name","Иван")

