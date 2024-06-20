let text = document.body.querySelector(".text") 
let but = document.body.querySelector(".on") 
let input = document.body.querySelector(".input")
let num = 0
let interval
but.addEventListener("click",function(){
    num = input.value
    clearInterval(interval)
    interval = setInterval(start,1000)   
})
   

function start(){
    if(num == 0){
        clearInterval(interval)
    }
    text.textContent = num
    num-=1
}
