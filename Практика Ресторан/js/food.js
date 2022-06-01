const food = ()=>{
  // const restaurant = "tanuki"
  const cardsMenu = document.querySelector(".cards-menu");

    let arrayFood = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : []

  const addCard = (cartItem) => {
    //   console.log(arrayFood.some((item)=> item.id === cartItem.id))
    arrayFood = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : []
      if (arrayFood.some((item) => item.id === cartItem.id)) {
          arrayFood.map((item)=>{
            if (item.id === cartItem.id) {
                item.count++
            }
            return item
          })
          
      }
      else{
        arrayFood.push(cartItem);
      }
    
    localStorage.setItem("card", JSON.stringify(arrayFood))

  }

  const renderItems = (data) => {
    data.forEach(({ description, id, image, name, price }) => {
      const card = document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `
        <img src="${image}" alt="${image}" class="card-image" />
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title card-title-reg">${name}</h3>
				</div>
				<div class="card-info">
					<div class="ingredients">
                    ${description}
					</div>
				</div>
				<div class="card-buttons">
					<button class="button button-primary button-add-cart">
						<span class="button-card-text">В корзину</span>
						<span class="button-cart-svg"></span>
					</button>
					<strong class="card-price-bold">${price} ₽</strong>
				</div>
			</div>`;

      card.querySelector(".button-add-cart").addEventListener("click", () => {
        const cardItem = {
          name: name,
          price: price,
          id:id,
          count: 1,
        };
        addCard(cardItem);
      });

      cardsMenu.append(card);
      console.log(arrayFood)
    });
  };

  if (localStorage.getItem(`rest`)) {
    const rest = JSON.parse(localStorage.getItem("rest"));
    const title = document.querySelector(".restaurant-title");
    const star = document.querySelector(".rating");
    const price = document.querySelector(".price");
    const category = document.querySelector(".category");

    title.textContent = rest.name;
    star.textContent = rest.stars;
    price.textContent = `От ${rest.price} ₽`;
    category.textContent = rest.kitchen;

    fetch(`./db/${rest.products}`)
      .then((response) => response.json())
      .then((data) => {
        renderItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    window.location.href = "/";
  }
}

food()