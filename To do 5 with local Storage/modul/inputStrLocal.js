import {createTodoItem} from "./createTodoItem.js"
export function inputStrLocal(spisok, key){  
    if (localStorage.getItem(key)) {
        console.log("в локалке есть данные")
        mass = JSON.parse(localStorage.getItem(key))
        console.log(mass)
        console.log("ASDFasdf")
        for(let obj of mass){
            let li = createTodoItem(obj.name,key).li
            li.id = obj.id
            console.log(12)
            
            spisok.append(li)
            if (obj.done){
                li.classList.add("red_But")
            }
            else if(obj.done == false){
                li.classList.remove("red_But")
            }
        }
    }
}