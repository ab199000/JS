let container = document.querySelector(".container")
// let div = document.createElement("div")
// div.classList.add("pole")
// container.append(div)
let massBtn = []
// let numArr = []
let win = 0
console.log(massBtn)
let time


function creatPole(){
    let div = document.createElement("div")
    div.classList.add("pole")
    container.append(div)
}

function proverkaN(){
    let n = prompt("Введите число")

    if (n !== null){
    console.log(typeof(n))
                if (parseInt(n) != NaN){
                    if(n > 0){
                        n = parseInt(n)
                        createNum(n)
                    }
                    else{
                        n = 4
                        createNum(n)
                    }
                }
                
                else{
                    n = 4
                    createNum(n)
                    
                   }
            }
    else {n = 4
    createNum(n)
    return n
    }
    
}
proverkaN()

function createNum(n){
    creatPole()
    console.log(massBtn)
    let numArr = []
    for(let i = 0;i < n;i++){
        numArr.push(i,i)
    }
    for(let num = 0; num < numArr.length; num++){
        let index = Math.round(Math.random()*n)
        let pobochNum = numArr[num]
        numArr[num] = numArr[index]
        numArr[index] = pobochNum
    }
    console.log(numArr)
    createButtons(numArr)
    timer(numArr)
    restart(n)
    return numArr
}



function createButtons(numArr){
    let massBtn = []
    // creatPole()
    let div = document.querySelector(".pole")
    for(let i = 0; i < Math.round(Math.sqrt(numArr.length));i++){
    let line = document.createElement("div")
    div.append(line)

    if(i == Math.round(Math.sqrt(numArr.length))-1 && numArr.length%(Math.round(Math.sqrt(numArr.length))) >0){
        for(let j = 0; j < numArr.length%Math.ceil(Math.sqrt(numArr.length));j++){

                let button = document.createElement("button")
                button.textContent = "Js"
                button.classList.add(".but")
                line.append(button)
                massBtn.push(button)
            

            
        }
    }
    else{
        for(let j = 0; j < (Math.sqrt(numArr.length));j++){
            let button = document.createElement("button")
            button.textContent = "Js"
            button.classList.add(".but")
            line.append(button)
            massBtn.push(button)
        }
    }
    
    proverca(massBtn,numArr)
    // restart(numArr.length)
}
}

function proverca(massBtn,numArr){
    let pressing
    let kolvo = 0
    let time
    container.addEventListener("click", (e)=>{
        let item = e.target
        for(let i = 0; i < massBtn.length;i++){

            if(item == massBtn[i]){
                item.disabled = true
                item.textContent = numArr[i]
    
                if(kolvo == 1){
                    for(let i = 0; i<massBtn.length; i++){
                        massBtn[i].disabled = true
                    }
    
                    if(item.textContent == pressing.textContent){
                        console.log("правда")
                        for(let i = 0; i<massBtn.length; i++){
                            if(massBtn[i].disabled == true && massBtn[i].textContent == "Js"){
                                massBtn[i].disabled = null
                            }
                            
                        }
                        win += 0.5
                        item.disabled = true
                        pressing.disabled = true
                    }
    
                    else{
                        clearTimeout(time)
                        time = setTimeout(()=>{
                            item.textContent = "Js"
                            pressing.textContent= "Js"
                            for(let i = 0; i<massBtn.length; i++){
                                if(massBtn[i].textContent == "Js"){
                                    massBtn[i].disabled = null
                                }
                                
                            }
                        },1000)
                        
                    }
                    
                    kolvo-=1
    
                    
                }
                
                else{
                    kolvo+=1
                    pressing = null
                    pressing = item
                }
            }



        }
        
        
    })
    
}
// proverca()


function timer(numArr){
    // let time
    let Pobeda
    clearInterval(time)
    let timer = document.createElement("div")
    timer.textContent = "60"
    timer.classList.add("timer")
    clearTimeout(Pobeda)
    time = setInterval(()=>{
        if(timer.textContent>0){timer.textContent -=1}
            if(timer.textContent == "0"){
            clearInterval(time)
            for(let i = 0; i < massBtn.length; i++){
                massBtn[i].disabled="true"
            }
            setTimeout(()=>{alert("Вы проиграли. Можете сыграть сначала с меньшим числом пар карт")},1000)
            }
            if(parseInt(timer.textContent) > 0){
                // console.log(numArr.length/2)
                // console.log(win)
                if(Math.round(win) === numArr.length/2){
                    clearInterval(time)
                    // alert("asd")
                    // let Pobeda
                    
                    Pobeda = setTimeout(()=>{alert("Победа")},10)
                    win = 0
                    console.log(numArr.length/2,"asd")
                    console.log(win,"asd")
                }
                

            }
        },1000)
        
        
    
    

    // clearTimeout(Pobeda)
    container.append(timer)

}
// timer(win,massBtn)

function restart(n){
    let restart = document.createElement("button")
    restart.classList.add("btn1")
    restart.textContent = "Начать с начала"
    restart.disabled = null
    restart.addEventListener("click", ()=>{

        
        
        // let div = document.createElement("div")
        // container.prepend(div)
        let div = document.querySelector(".pole")
        let timer = document.querySelector(".timer")
        
        div.remove()
        timer.remove()
        restart.remove()
        massBtn = []
        win = 0
        // creatPole()
        createNum(n)
        // createNum(n)
        // console.log(12)
        // location.reload()
        // clearInterval(time)
    })
    container.append(restart)
    console.log("asd",win)
} 
// restart()




