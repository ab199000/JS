import {changeItemDone} from "./changeItemDone"
export function createTodoItem(input, key){
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