// let sqr = document.querySelector(".as") 
// let but = document.querySelector(".qw")
// but.addEventListener("click", function() {
//     sqr.style.background = "black";
// })


// let but = document.querySelector(".but1")
// but.addEventListener("click", function() {
//     alert("Привет")
// })


// let but = document.querySelector(".b2")
// let input1 = document.querySelector(".input2")
// but.addEventListener("click", function() {
//     input1.value ="test@email.ru"
// })


// let but3 = document.body.querySelector(".but3") 
// let input3 = document.body.querySelector(".input3")
// but3.addEventListener('click',() =>{
//     if(input3.value.length == 0){alert("Вы ничего не ввели")}
//     else {alert(`Вы ввели ${input3.value}`)}
// })

// let but = document.querySelector(".but4")
// let input1 = document.querySelector(".input4")
// let input2 = document.querySelector(".input4_1")
// but.addEventListener("click", function() {
//     let in1 = input1.value
//     input1.value = input2.value
//     input2.value = in1
//     })

// let but5 = document.body.querySelector(".but5") 
// let but5_1 = document.body.querySelector(".but5_1")
// let input5 = document.body.querySelector(".input5")
// but5.addEventListener('click',function() {
//     input5.disabled = "disabled"
// })
// but5_1.addEventListener('click',function() {
//     input5.disabled = null
// })

// let but = document.querySelector(".but6") 
// let sqr6 = document.querySelector(".sqr6")
// but.addEventListener('click',function(){
//     if(sqr6.hidden == true){sqr6.hidden = false, but.textContent = "скрыть квадрат"}
//     else{sqr6.hidden = true, but.textContent = "показать квадрат"}
// })

// let sqr7 = document.querySelector(".sqr7")
// sqr7.addEventListener('mouseover',function(){sqr7.style.backgroundColor = "green"})
// sqr7.addEventListener('mouseout',function(){sqr7.style.backgroundColor = "red"})

let sqr8 = document.querySelectorAll(".sqr8")
function getColor(key){
    let num = parseInt(key)
    for(let i = 0; i< sqr8.length;i++){
        if (i == num){
            sqr8[key].style.backgroundColor = 'green'}
        else{sqr8[i].style.backgroundColor = 'red'}
    } 
}
n1.addEventListener('click',function(){getColor(0)})
n2.addEventListener('click',function(){getColor(1)})
n3.addEventListener('click',function(){getColor(2)})
n4.addEventListener('click',function(){getColor(3)})
but.addEventListener('click',function(){
        
    })
