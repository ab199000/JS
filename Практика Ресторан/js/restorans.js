const restorans = () => {
    const cardsRest = document.querySelector(".cards-restaurants");

    const renderItems = (data) => {
      data.forEach((item) => {
        const {
          image,
          kitchen,
          name,
          price,
          products,
          stars,
          time_of_delivery,
        } = item;
        // console.log(item)
        const a = document.createElement("a");

        a.setAttribute("href", "/restaurant.html");
        a.classList.add("card");
        a.classList.add("card-restaurant");

        a.dataset.products = products;

        a.innerHTML = `
        <img src="${image}" alt="${image}" class="card-image">
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <div class="card-info">
                    <div class="rating">${stars}</div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
            </div>
        `;

        a.addEventListener("click", (e) => {
          e.preventDefault();
          // const link = a.dataset.products
          localStorage.setItem("rest", JSON.stringify(item));

          window.location.href = `/restaurant.html`;
        });
        cardsRest.append(a);
      });
    };

    fetch("./db/partners.json")
      .then((response) => response.json())
      .then((data) => {
        renderItems(data);
      })
      .catch((error) => {
        console.log(error);
      });

}
restorans()