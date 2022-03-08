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

// let square = document.body.querySelectorAll(".sqr8")
// let container = document.body.querySelector(".e8")
// container.addEventListener("click",(event) =>{
//     let item = event.target.closest(".sqr8")
//     if(item.style.backgroundColor == "green"){item.style.backgroundColor = ""}
//     else{
//         for(i of square){
//         console.log(i)
//         i.style.backgroundColor = ""
//         }
//     item.style.backgroundColor = "green"
//     }
// })


let but_0 = document.querySelector(".but_0")
let but_1 = document.querySelector(".but_1")
let but_2 = document.querySelector(".but_2")
let but_3 = document.querySelector(".but_3")
let but_4 = document.querySelector(".but_4")
let but_5 = document.querySelector(".but_5")
let but_6 = document.querySelector(".but_6")
let but_7 = document.querySelector(".but_7")
let but_8 = document.querySelector(".but_8")
let but_9 = document.querySelector(".but_9")
let but_sum = document.querySelector(".but_sum")
let but_ruz = document.querySelector(".but_ruz")
let but_del = document.querySelector(".but_del")
let but_um = document.querySelector(".but_um")
let but_otv = document.querySelector(".but_otv")
let but_delet = document.querySelector(".but_delet")

let place = document.querySelector(".place")
let znach = ""
but_0.addEventListener("click", function() {
    place.value += 0
    znach += "0" 
})
but_1.addEventListener("click", function() {
    place.value += 1
    znach += "1"
})
but_2.addEventListener("click", function() {
    place.value += 2
    znach += "2"
})
but_3.addEventListener("click", function() {
    place.value += 3
    znach += "3"
})
but_4.addEventListener("click", function() {
    place.value += 4
    znach += "4"
})
but_5.addEventListener("click", function() {
    place.value += 5
    znach += "5"
})
but_6.addEventListener("click", function() {
    place.value += 6
    znach += "6"
})
but_7.addEventListener("click", function() {
    place.value += 7
    znach += "7"
})
but_8.addEventListener("click", function() {
    place.value += 8
    znach += "8"
})
but_9.addEventListener("click", function() {
    place.value += 9
    znach += "9"
})
but_sum.addEventListener("click", function() {
    place.value += "+"
    znach += "+"
})
but_ruz.addEventListener("click", function() {
    place.value += "-"
    znach += "-"
})
but_del.addEventListener("click", function() {
    place.value += ":"
    znach += "/"
})
but_um.addEventListener("click", function() {
    place.value += "*"
    znach += "*"
})
but_delet.addEventListener("click", function() {
    place.value = ""

})
but_otv.addEventListener("click", function() {
    place.value = eval(znach)
})
