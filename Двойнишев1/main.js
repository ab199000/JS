function getToday() {
  const timerItems = document.querySelectorAll(".timer__count");
  const timerText = document.querySelectorAll(".timer__text");
  // const timeWord = document.querySelectorAll(".timer__text");

  const today = new Date();

  const dateOver = new Date("26 may 2022").getTime();
  const differenceTime = (dateOver - today) / 1000;

  // const days = today.getDate()
  // const hours = today.getHours()
  // const minutes = today.getMinutes()
  // const seconds = today.getSeconds()

  const days = Math.floor(differenceTime / 60 / 60 / 24);
  const hours = Math.floor(differenceTime / 60 / 60) % 24;
  const minutes = Math.floor((differenceTime / 60) % 60);
  const seconds = Math.floor(differenceTime % 60);

  // const fdays = days < 10 ? "0" + days : days;
  // const fhours = hours < 10 ? "0" + hours : hours;
  // const fminutes = minutes < 10 ? "0" + minutes : minutes;
  // const fseconds = seconds < 10 ? "0" + seconds : seconds;

  let arrToday = [days, hours, minutes, seconds];

  for (let i = 0; i < arrToday.length; i++) {
    if (arrToday[i] < 10) {
      timerItems[i].textContent = "0" + arrToday[i];
    } else {
      timerItems[i].textContent = arrToday[i];
    }
    timerText[i].textContent = wordForTime(arrToday[i], i);
  }

  if (differenceTime <= 0) {
    for (let i = 0; i < arrToday.length; i++) {
      clearInterval(timer);
      timerItems[i].textContent = "00";
    }
  }
}

function wordForTime(time, i) {
  // const timerText = document.querySelectorAll(".timer__text")
  let arrWordForTime = [
    ["Дней", "День", "Дня"],
    ["Часов", "Час", "Часа"],
    ["Минут", "Минута", "Минуты"],
    ["Секунд", "Секунда", "Секунды"],
  ];

  value = Math.abs(i) % 100;

  const lastNum = time % 10;

  if (time > 10 && time < 20) return arrWordForTime[value][0];
  if (lastNum > 1 && lastNum < 5) return arrWordForTime[value][2];
  if (lastNum === 1) return arrWordForTime[value][1];
  return arrWordForTime[value][0];
}

let timer = setInterval(() => {
  getToday();
}, 500);

let applicationButtons = document.querySelectorAll(".application");
const modal = document.querySelector(".modal");
const cross = document.querySelector(".modal__close");
const body = document.querySelector("body");

for (item of applicationButtons) {
  item.addEventListener("click", () => {
    // alert("Оставить заявку")
    modal.style.display = "flex";
    body.classList.add("noscroll");
  });
}

applicationButtons.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.opacity = 0.8;
  });
  item.addEventListener("mouseout", () => {
    item.style.opacity = 1;
  });
});

modal.addEventListener("click", (e) => {
  const wind = e.target.closest(".modal__inner");

  if (!wind) {
    modal.style.display = "none";
    body.classList.remove("noscroll");
  }
});

cross.addEventListener("click", () => {
  modal.style.display = "none";
  body.classList.remove("noscroll");
});

// let submit = document.querySelector(".submit");
// submit.addEventListener("click", sending());

let form = document.querySelector("form");
form.addEventListener("submit", sending);

async function sending() {
  let inputMass = document.querySelectorAll(".modal__input");
  let name = inputMass[0].value;
  let tel = inputMass[1].value;
  let mail = inputMass[2].value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      body: {
        name: name,
        tel: mail,
        mail: mail,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  getById();
}

async function getById() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}
getById();
// async function changeById() {
//   let request = await fetch("http://localhost:3000/api/todos/1652771753025", {
//     method: "Patch",
//     body: JSON.stringify({
//       name: "eat",
//       owner: "me",
//       done: false,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await request.json();
//   console.log(data);
// }
// changeById();

// let anim1 = document.querySelector(".");
let anim1 = document.querySelector(".process__img");
let anim2 = document.querySelector(".anim");

function anim(img) {
  let grad = 1;
  let time = setInterval(() => {
    img.style.transform = `rotate(${grad}deg)`;
    grad += 1;
  }, 10);
}

anim(anim1);
anim(anim2);
