let container = document.querySelector(".container")
//Создаем и возвращаем заголовок приложения
function asd(){
function createAppTitle(){
    let h1 = document.createElement("h1")
    h1.textContent = "Список дел"
    container.append(h1)
    return h1
}
//Создаём и возвращаем форму для создания дела
createAppTitle()
function createTodoItemForm(){
    let form = document.createElement("form")
    let input = document.createElement("input")
    input.classList.add("input")
    input.placeholder = "Введите новое дело"
    input.type = "text"
    form.append(input)
    let but = document.createElement("button")
    but.textContent = 'Добавить запись'
    but.type = "button"
    but.addEventListener("click", ()=>{
        createTodoItem()})
    form.append(but)
    container.append(form)
    return form, but
}
createTodoItemForm()
//Создаём и возвращаем список элементов
function createTodoList(){
    let ul = document.createElement("ul")
    ul.classList.add("ul")
    ul.style.listStyleType = "none"
    container.append(ul)
}
createTodoList()
function createTodoItem(){
    let input = document.querySelector(".input")
    let li = document.createElement("li")
    li.textContent = input.value
    // li.classList.add(parseFloat(0))
    let ul = document.querySelector(".ul")
    ul.append(li)
    input.value = null
    but_elem()
    function but_elem(){
        let twoBut = document.createElement("div")
        twoBut.classList.add("buttons_block")
        let but1 = document.createElement("button")
        but1.textContent = "Готово"
        twoBut.append(but1)
        li.append(twoBut)
        let but2 = document.createElement("button")
        but2.textContent = "Удалить"
        twoBut.append(but2)
        but2.addEventListener("click", ()=>{
            let vopros = confirm("Вы уверены, что хотите удалить запись?")
            if (vopros){
                li.remove()
            }
        })
        but1.addEventListener('click', ()=>{
            li.classList.toggle("red_But")
        })
        but1.classList.add("but")
        but2.classList.add("but")
    }
}

}
asd()

