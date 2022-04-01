let container1 = document.querySelector(".containerMy")
let container2 = document.querySelector(".containerDad")
let container3 = document.querySelector(".containerMom")
let mass = []
// let mass = [
//     {name: "asd",
//     done: true
// },
// {
//     name:"asdfdf",
//     done:false
// }
// ]

    function createAppTitle(title){
        const h1 = document.createElement("h1")
        h1.textContent = title
        return h1
    }

    function createTodoItemForm(container){
        const form = document.createElement("form")
        const input = document.createElement("input")
        const but = document.createElement("button")
        const containerP = container
        

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
                let li =createTodoItem(input.value).li

            input.value = ''
            but.disabled = "disabled"
            let ul = document.querySelector(".ul")
                ul.append(li)
            }
        })

        form.addEventListener("submit",(e)=>{
            e.preventDefault()
            if (input.value){
                let li =createTodoItem(input.value).li
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

    function createTodoItem(input){
        const li = document.createElement("li")
        const twoBt = document.createElement("div")
        const btDo = document.createElement("button")
        const btDelet = document.createElement("button")
        let ul = document.querySelector(".ul")
        
        
        li.textContent = input

        // mass.push({
        //     name: input,
        //     done: false,
        // })

        
        // localStorage.setItem("1", JSON.stringify(mass))
    // console.log(mass)
    // console.log(localStorage.getItem("1"))
        
        btDo.textContent = "Готово"
        btDelet.textContent = "Удалить"

        btDo.type = "button"
        btDelet.type = "button"

        btDo.addEventListener('click', ()=>{
                li.classList.toggle("red_But")
            })

        btDelet.addEventListener("click", ()=>{
            let vopros = confirm("Вы уверены, что хотите удалить запись?")
            if (vopros){
                li.remove()
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


function createTodoApp(container,title){
    const titul = createAppTitle(title)
    const inputForm = createTodoItemForm(container)
    const spisok = createTodoList()
    // const li = createTodoItem()
    debugger;
    if (localStorage.getItem('1')) {
        console.log("в локалке есть данные")
        mass = JSON.parse(localStorage.getItem("1"))
        console.log(mass)
        console.log("ASDFasdf")
        for(let obj of mass){
            let li = createTodoItem(obj.name).li

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


    // inputForm.form.addEventListener("submit", e=>{
    //     e.preventDefault()
    //     const input = inputForm.input.value
    //     mass = JSON.parse(localStorage.getItem('1')) || mass
    //     createTodoItem(input)
    //     mass.push({
    //         name: input,
    //         done: false,
    //     })
    //     localStorage.setItem('1',JSON.stringify(mass))   
    // })


        // for(let i = 0; i< mass.length; i++){

        // let li = createTodoItem(mass[i].name).li
        // spisok.append(li)
        // if (mass[i].done){
        //     li.classList.toggle("red_But")
        // }
            
        // }

        // mass.push(JSON.parse(localStorage.getItem("1")))

        // for (let i = 0; i < JSON.parse(localStorage.getItem("1")).length;i++){
        // // for (let i = 0; i < 5;i++){
        //     mass.push(JSON.parse(localStorage.getItem("1"))[i])
        // }


        // localStorage.clear("1")
        


        // for (leti = 0; i < JSON.parse(localStorage.getItem("1")).length;i++){
        //         mass.push(JSON.parse(localStorage.getItem("1"))[i])
                
        //     }

    

    container.append(titul, inputForm.form, spisok)

    
    
    // for(let i = 0; i< mass.length; i++){
            
    //         let li = createTodoItem(mass[i].name).li
    //         spisok.append(li)
    //         if (mass[i].done){
    //             li.classList.add("red_But")
    //         }
    //         else if(mass[i].done == false){
    //             li.classList.remove("red_But")
    //         }
                
    //     }

        


}

// ToDo(container1, "Мой писок дел")
// ToDo(container2, "Папин писок дел")
// ToDo(container3, "Мамин писок дел")

window.createTodoApp = createTodoApp;