
let input1 = document.body.querySelector(".input1")
let h2 = document.body.querySelector(".h2")
let word
input1.addEventListener('keyup',()=>{clearTimeout(word)
word = setTimeout(()=>{h2.textContent = input1.value },300)
})