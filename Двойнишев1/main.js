function getToday(){
    const timerItems = document.querySelectorAll(".timer__count")
    console.log(timerItems)
    const today = new Date()
    let arrToday = [today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds()] 
    for(let i=0; i<arrToday.length; i++){
        timerItems[i].textContent =  arrToday[i]
    }
    console.log(days)
}

let timer = setInterval(()=>{getToday()},1000)


let applicationButtons = document.querySelectorAll(".application")
const modal = document.querySelector(".modal")
const cross = document.querySelector(".modal__close")
const body = document.querySelector("body")

for(item of applicationButtons){
    item.addEventListener('click', ()=>{
        // alert("Оставить заявку")
        modal.style.display = "flex";
        body.classList.add("noscroll")
    })
}

modal.addEventListener("click", (e)=>{
    const wind = e.target.closest(".modal__inner")

    if(!wind){
        modal.style.display = "none";
        body.classList.remove("noscroll")
    }
})

cross.addEventListener("click",()=>{
    modal.style.display = "none";
    body.classList.remove("noscroll")
})