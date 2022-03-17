let container = document.querySelector(".container")
function createAppTitle(){
    let h1 = document.createElement("h1")
    h1.textContent = "Список дел"
    container.append(h1)
    return h1
}
createAppTitle()
function createTodoItemForm(){
    let form = document.createElement("form")
    let input = document.createElement("input")
    input.placeholder = "Введите новое дело"
    form.append(input)
    let but = document.createElement("button")
    but.textContent = 'Добавить запись'
    form.append(but)
    container.append(form)
    return form 
}
createTodoItemForm()
function createTodoList(){

let ul = document.createElement("ul")
container.append(ul)
}
createTodoList()
function createTodoList(){

}
let but1 = document.createElement("button")
but1.textContent = "Готово"
container.append(but1)
let but2 = document.createElement("button")
but2.textContent = "Удалить"
container.append(but2)

