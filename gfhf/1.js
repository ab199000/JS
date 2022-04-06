const container = document.querySelector(".container")
let mass = []
let kolvo
let n = 5
function createRandomNumber(mass, n){
    for(let i=0; i<n; i++){
        let num = Math.round(Math.random()*9)
    }


}

mass.push(num)
function createCard(){
    for(let i =0; i<3; i++){
        let div = document.createElement("div")
        div.classList.add("line")
        container.append(div)
        for(let i =0; i<3; i++){
        let card = document.createElement("p")
        card.textContent = "Js"
        div.append(card)
        }
    }


}
createCard()
container.addEventListener('click',(e)=>{
    let item = e.target
    console.log(e.target)
    item.textContent = "2"
    kolvo++
    
})