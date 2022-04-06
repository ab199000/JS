import {inputStrLocal} from "./inputStrLocal.js"
import {createAppTitle} from "./h1.js"
import {createTodoList} from "./createTodoList.js"
import { createTodoItemForm } from "./createTodoItemForm.js"

export function createTodoApp(container,title,key){
    const titul = createAppTitle(title)
    const inputForm = createTodoItemForm(key)
    const spisok = createTodoList()
    container.append(titul, inputForm.form, spisok) 
    inputStrLocal(spisok,key)
}