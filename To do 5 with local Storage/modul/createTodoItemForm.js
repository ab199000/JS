import {createTodoItem} from "./createTodoItem.js"
import {createLocalStor} from "./createLocalStor.js"
export function createTodoItemForm(key){
    const form = document.createElement("form")
    const input = document.createElement("input")
    const but = document.createElement("button")

    

    input.type = "text"
    but.type = "button"

    input.placeholder = "Введите новое дело"
    but.textContent = "Добавить запись"

    but.disabled = "disabled"

    input.addEventListener("input", ()=>{
        if (input.value){
        but.disabled = null
        }
    })

    but.addEventListener("click", ()=>{
        if (input.value){
            let li = createTodoItem(input.value,key).li
            createLocalStor(input.value, li.id,key)
            input.value = ''
            but.disabled = "disabled"
            let ul = document.querySelector(".ul")
            ul.append(li)
            
        }
    })

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        if (input.value){
            let li = createTodoItem(input.value,key).li
            createLocalStor(input.value, li.id, key)
            input.value = ''
            but.disabled = "disabled"
            let ul = document.querySelector(".ul")
            ul.append(li)
            
        }
    })

    input.classList.add("input")

    form.append(input)
    form.append(but)
    return {
        form,
        input,
        but
    }
}