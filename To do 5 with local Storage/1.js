let container1 = document.querySelector(".containerMy")
let container2 = document.querySelector(".containerDad")
let container3 = document.querySelector(".containerMom")
let mass = []

function createAppTitle(title){
    const h1 = document.createElement("h1")
    h1.textContent = title
    return h1
}

function createTodoItemForm(key){
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

function createTodoList(){
    const ul = document.createElement("ul")

    ul.classList.add("ul")

    return ul
}

function createTodoItem(input, key){
    const li = document.createElement("li")
    const twoBt = document.createElement("div")
    const btDo = document.createElement("button")
    const btDelet = document.createElement("button")
    li.id =  Math.random().toFixed(3)
    
    
    li.textContent = input
    
    btDo.textContent = "Готово"
    btDelet.textContent = "Удалить"

    btDo.type = "button"
    btDelet.type = "button"

    btDo.addEventListener('click', ()=>{
        mass = JSON.parse(localStorage.getItem(key));
        li.classList.toggle("red_But")
        changeItemDone(mass, li.id)
        localStorage.setItem(key, JSON.stringify(mass))
    })

    btDelet.addEventListener("click", ()=>{
        let vopros = confirm("Вы уверены, что хотите удалить запись?")
        if (vopros){
            li.remove()
            for(obj of mass){
                if (obj.id === li.id){
                    mass.splice(mass.indexOf(obj),1)
                }
                
            }
            console.log(mass)
            // localStorage.clear()
            localStorage.setItem(key, JSON.stringify(mass))

        }
    })

    btDo.classList.add("but")
    btDelet.classList.add("but")
    twoBt.classList.add("buttons_block")
    

    twoBt.append(btDo)
    twoBt.append(btDelet)
    li.append(twoBt)
    

    
    return{
        li,
        twoBt
    }
}

function createLocalStor(input, num, key){
    mass.push({
        id: num,
        name: input,
        done: false,
    })
    localStorage.setItem(key, JSON.stringify(mass))
}

function changeItemDone(mass, li){
    mass.map(obj => {
        console.log(li)
        if (obj.id === li & obj.done === false) {
            console.log("теперь true")
            obj.done = true;
            console.log(obj.id)
        } else if (obj.id === li & obj.done === true) {
            console.log("теперь false")
            obj.done = false;
        }
    })
}

function inputStrLocal(spisok, key){  
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

function createTodoApp(container,title,key){
    const titul = createAppTitle(title)
    const inputForm = createTodoItemForm(key)
    const spisok = createTodoList()
    container.append(titul, inputForm.form, spisok) 
    inputStrLocal(spisok,key)
    
}
window.createTodoApp = createTodoApp