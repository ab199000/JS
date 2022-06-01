const buttonComin = document.querySelector(".button-auth");
const butOut = document.querySelector(".button-out");
const backet = document.getElementById("cart-button");
const form = document.querySelector(".modal-auth");
const btnForm = document.querySelector(".button-login");
const userName = document.querySelector(".user-name");

let massUsers = [];
let baza = [
  { login: "asd", password: "123" },
  { login: "ret", password: "123" },
];
let key = "users";

let statuseLogin = false;
let statusePassword = false;

// localStorage.clear();
forTwoStr("В сети");
getLockalStor(key, baza);
giveLockalStor(key, massUsers);

buttonComin.addEventListener("click", () => {
  form.style.display = "flex";
});

btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  const login = document.getElementById("login");
  const password = document.getElementById("password");

  if (comeIn(baza, login.value, password.value)) {
    butOut.style.display = "flex";
    form.style.display = "none";
    buttonComin.style.display = "none";
    userName.textContent = login.value;
    userName.style.display = "flex";
    localStorage["В сети"] = JSON.stringify({
      login: login.value,
      password: password.value,
    });
    forTwoStr("В сети");
  } else {
    for (let i = 0; i < 2; i++) {
      if (!login.value.trim()) {
        alert("Введите логин");
        break;
      }
      if (!password.value) {
        alert("Введите пароль");
        break;
      }
    }
  }
});

function giveLockalStor(key, mass) {
  mass.push(localStorage.getItem(key));
}
function getLockalStor(key, mass) {
  localStorage[key] = JSON.stringify(mass);
}

function comeIn(baza, login, password) {
  console.log(baza);
  console.log(login);
  console.log(password);
  let status = false;
  let newMass = {
    login: login,
    password: password,
  };
  for (let obj of baza) {
    let log = obj.login == newMass.login;
    let pass = obj.password == newMass.password;

    if (log && pass) {
      status = true;
    }
  }
  return status;
}

function forTwoStr(key) {
  if (localStorage[key]) {
    let obj = JSON.parse(localStorage.getItem("В сети"));
    let login = obj["login"];
    console.log(obj);
    console.log(login);
    userName.textContent = login;
    userName.style.display = "flex";
    console.log(obj);
    console.log(login);
  }
}
