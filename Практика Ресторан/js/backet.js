const backet = ()=>{
    const btnbacket = document.querySelector(".button-cart")
    const modalBacket = document.querySelector(".modal");
    const btnFormOtmena = document.querySelector(".clear-cart");
    const btnClose = document.querySelector(".close")
    const body = document.querySelector(".modal-body")
    const btnFormZakaz = document.querySelector(".ext")
    const btnClear = document.querySelector(".clear-cart")
    const sell = document.querySelector(".modal-pricetag")

    function zero(){
        const mass = JSON.parse(localStorage.getItem("card"))

        for(let obj of mass){
            if(obj.count == 0){
                mass.splice(mass.indexOf(obj), 1)
            }
        
        }
        localStorage.setItem("card", JSON.stringify(mass))
        renderItems(mass);
    }

    function itogSum(){
        
        const mass = JSON.parse(localStorage.getItem("card"))
    
        let itog = 0
    
        for(let obj of mass){
          let num = obj.price * obj.count
          itog+= num
        }
        sell.textContent = itog + " ₽"

        
        
        return itog
      }
      


    const resetCard = ()=>{
        body.innerHTML = ""
        localStorage.removeItem("card")
        modalBacket.style.display = "none"
    }

    const incrementCount =(id)=>{
        const cardArray = JSON.parse(localStorage.getItem("card"))
        cardArray.map((item) =>{
            if (item.id === id) {
                item.count++
            }
            return item
        })
        localStorage.setItem("card", JSON.stringify(cardArray))
        renderItems(cardArray);
    }

    const decrementCount = (id) => {
        const cardArray = JSON.parse(localStorage.getItem("card"))
        cardArray.map((item) =>{
            if (item.id === id) {
                if(item.count > 0){
                    item.count--
                }
            }
            
            return item
        })
        
        localStorage.setItem("card", JSON.stringify(cardArray))
        renderItems(cardArray);
    };

    const renderItems = (data) =>{
        body.innerHTML = ""
        data.forEach(({name, price, id, count}) => {
            

            const cardElem = document.createElement("div")

            cardElem.classList.add("food-row")

            cardElem.innerHTML = `
            <span class="food-name">${name}</span>
            <strong class="food-price">${price} ₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec" data-index="${id}">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-inc" data-index="${id}">+</button>
            </div>
            `;

            cardElem.querySelector(".btn-dec").addEventListener("click", ()=>{decrementCount(id)
                zero()
                itogSum()
                })

            cardElem.querySelector(".btn-inc").addEventListener("click", ()=>{incrementCount(id)
                itogSum()})
            
            body.append(cardElem)
        });
    }
    // body.addEventListener("click", (e)=>{
    //     e.preventDefault()
    //     if(e.target.classList.contains("btn-inc")){
    //         incrementCount(e.target.dataset.index)
    //         console.log(e.target.dataset.index)
    //     }
    //     if(e.target.classList.contains("btn-dec")){
    //         decrementCount(e.target.dataset.index)
    //     }
            
        
    // })

    btnFormZakaz.addEventListener("click", ()=>{
        const cardArray = JSON.parse(localStorage.getItem("card"))

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: cardArray
        })
        .then(response =>{
            if(response.ok){
                resetCard()
            }
            sell.textContent = "0 ₽"
        })
        // .catch(e =>{
        //     console.error(e)
        // })
        
    })

    btnbacket.addEventListener("click", () => {
        JSON.parse(localStorage.getItem("card"))
        console.log(JSON.parse(localStorage.getItem("card")))

        if (localStorage.getItem("card")) {
            renderItems(JSON.parse(localStorage.getItem("card")));
        }
      modalBacket.style.display = "flex";
      itogSum()
    });

    btnFormOtmena.addEventListener("click", () => {
      modalBacket.classList.remove("is-open");
    });

    btnClose.addEventListener("click", ()=>{
        modalBacket.style.display = "none";
    })

    btnClear.addEventListener("click",()=>{
        let mass = JSON.parse(localStorage.getItem("card"))
        mass.length = 0
        localStorage.setItem("card", JSON.stringify(mass))
        renderItems(JSON.parse(localStorage.getItem("card")));
        modalBacket.style.display = "none"
    })
}
backet()