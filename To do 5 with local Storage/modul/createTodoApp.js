import {inputStrLocal} from "./inputStrLocal.js"
export function createTodoApp(container,title,key){
    const titul = createAppTitle(title)
    const inputForm = createTodoItemForm(key)
    const spisok = createTodoList()
    container.append(titul, inputForm.form, spisok) 
    inputStrLocal(spisok,key)
}