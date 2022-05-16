let mass = []
let chek = false
let StartYear = false
let massNameTable = ["ФИО","Факультет","Дата рождения","Годы бучения"]
let newMass = creatNewMass(mass)
let massError = [] 

const container = document.querySelector(".container")
const form = document.createElement("Form")
let table = document.createElement("table")
table.id = "table"

const filter = document.createElement("input")
filter.id = "search-text"
filter.classList.add("form-control")
filter.placeholder = "Введите часть информации."
filter.type = "text"

filter.addEventListener("input", ()=>{tableSearch()})

const inputName = document.createElement("input")
inputName.placeholder = "Имя"
const inputSurname = document.createElement("input")
inputSurname.placeholder = "Фамилия"
const inputPostname = document.createElement("input")
inputPostname.placeholder = "Отчество"
const inputBirthday = document.createElement("input")
inputBirthday.placeholder = "Дата рождения"
const inputYearBegin = document.createElement("input")
inputYearBegin.placeholder = "Год начала обучения"
const inputFaculty = document.createElement("input")
inputFaculty.placeholder = "факультет"

inputName.classList.add("input")
inputSurname.classList.add("input")
inputPostname.classList.add("input")
inputBirthday.classList.add("input")
inputBirthday.type = "Date"
inputYearBegin.classList.add("input")
inputFaculty.classList.add("input")

const button = document.createElement("button")
button.textContent = "Добавить студента"
// container.append(button)

container.append(table)
form.append(inputName,inputSurname,inputPostname,inputBirthday,inputYearBegin,inputFaculty,button)
container.append(filter)





inputStrLocal(1)

createTable(mass,massNameTable)

let massInputs = document.querySelectorAll(".input")
console.log(massInputs)

button.addEventListener("click", ()=>{
    
    error(inputYearBegin.value)
    let input = false

    for(let i = 0; i<massInputs.length;i++){

        if(massInputs[i].value.trim() != ""){

            input = true

            if(massInputs[i].type == "date"){

                forDate(massInputs[i].value)

                if(chek){
                    input = true
                    console.log("date true")
                    // chek = false
                }
                else{
                    input = false
                }

            }   
        }

        
        else{
            input = false
            massError.push(`Заполните поля`)
        }
    }
    

    if(input && chek&&StartYear){
        mass.push({
            Name: inputName.value.trim(),
            Surname: inputSurname.value.trim(),
            Postname: inputPostname.value.trim(),
            Birthday: inputBirthday.value.trim(),
            YearBegin: inputYearBegin.value.trim(),
            Faculty: inputFaculty.value.trim(),
        })
        newMass.push({
            Name: inputName.value.trim(),
            Surname: inputSurname.value.trim(),
            Postname: inputPostname.value.trim(),
            Birthday: inputBirthday.value.trim(),
            YearBegin: inputYearBegin.value.trim(),
            Faculty: inputFaculty.value.trim(),
        })
        input = false
        chek = false
        localStorage.setItem(1, JSON.stringify(mass))
        // createTable(mass,massNameTable)
        cleanInput(massInputs)
    }
    else{
        lookError(massError)
    }
    console.log(inputBirthday.value)
    console.log(mass)
})

container.append(form)

function forDate(date){

    if(Date.parse('1900.01.01')/1000 < Date.parse(date)/1000){
        chek = true
    }
    else{
        chek = false
        massError.push("Дата должна быть больше 01.01.1900")
    }
    return chek
}

function createTable(arr,arrName){
    table.innerHTML = ""

    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    // container.append(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    console.log(arr)

    for (let i = 0; i < arr.length + 1; i++) {
        let row = document.createElement("tr");
        if (i == 0) {

          for (let j = 0; j < arrName.length; j++) {
            let cell = document.createElement("th");
            cell.textContent = arrName[j];
            row.appendChild(cell);
            thead.appendChild(row);
          }
        } else {
          fillRow(i - 1, row, arr);
          tbody.appendChild(row);
        }
    }
    function fillRow(i, row, mass) {
        let nowMoment = new Date()
        let FIO = ""
        let faculty
        let date
        let age
        let yearStart

        for(let key in mass[i]){
            if(key == "Name" || key == "Surname" || key == "Postname"){
                FIO = FIO + " " + mass[i][key]
            }
            else if (key == "Faculty"){
                faculty = mass[i][key]
            }
            else if(key == "Birthday"){
                age = nowMoment.getFullYear() - mass[i][key].slice(0, 4);
                let monthAge = nowMoment.getMonth() + 1 - mass[i][key].slice(5, 7);
                let dayAge = nowMoment.getDay() + 1 - mass[i][key].slice(8, 10);
                if (dayAge < 0) {
                    monthAge -= 1;
                }
                if (monthAge < 0) {
                    age -= 1;
                }
                console.log(age)
                date = mass[i][key].slice(8,10) + "." + mass[i][key].slice(5,7) + "." + mass[i][key].slice(0,4) +" ("+ age + formAge(age) + ")"
            }
            else{
                yearStart = mass[i][key]
                console.log(yearStart)
            }

        }


        for(let h = 0;h < massNameTable.length;h++){
            if(massNameTable[h] == "ФИО"){
                let cell = document.createElement("td")
                cell.textContent = FIO
                row.appendChild(cell)
            }
            else if(massNameTable[h] == "Факультет"){
                let cell = document.createElement("td")
                cell.textContent = faculty
                row.appendChild(cell)
            }
            else if(massNameTable[h] == "Дата рождения"){
                let cell = document.createElement("td")
                cell.textContent = date
                row.appendChild(cell)
            }
            else{
                let cell = document.createElement("td")
                cell.textContent = forYearLerning(yearStart)
                row.appendChild(cell)
                
            }
        }    
      }
      return table
    // return container.append(table)
}

function formAge(age) {
    if (String(age).substr(-1) == 1) {
      return "год";
    } else if (String(age).substr(-1) > 1 && String(age).substr(-1) < 5) {
      return "года";
    } else {
      return "лет";
    }
}

function cleanInput(massInputs){
    for(let i = 0;i<massInputs.length;i++){
        massInputs[i].value = ""
    }
}

function forYearLerning(date){
    let nowMoment = new Date("2022.09.12")
    let month = nowMoment.getMonth()
    let kurs = nowMoment.getFullYear() - Number(date)
    let itogKurs = kurs +  " курс"
    let itog
    
    if(kurs<0){
        itogKurs = "закончил"
    }
    else{
        if(kurs > 0 && kurs >5){
            if(month>=8){

                itogKurs = "закончил"
            }     
        }
        else{
            if(month>=8){
                itogKurs = kurs + 1 + " курс"
            }  
        }
        
    }
    
    itog = `${date}-${Number(date)+4} (${itogKurs})`
    console.log(itog)
    console.log(itogKurs)
    return itog
}


function inputStrLocal(key){  
    if (localStorage.getItem(key)) {
        console.log("в локалке есть данные")
        mass = JSON.parse(localStorage.getItem(key))
        console.log(mass)
        createTable(mass,massNameTable)
    }
}

function sortOnFIO(newMass){
    
    let a = newMass
    function SortArray(x, y){
        if (x.Surname < y.Surname) {return -1;}
        if (x.Surname > y.Surname) {return 1;}
        return 0;
    }
    let s = a.sort(SortArray);
    console.log(s);
}

function sortFaculty(newMass){
    
    let a = newMass
    function SortArray(x, y){
        if (x.Faculty < y.Faculty) {return -1;}
        if (x.Faculty > y.Faculty) {return 1;}
        return 0;
    }
    let s = a.sort(SortArray);
    console.log(s);
}

function sortBirthday(newMass){
    
    let a = newMass
    function SortArray(x, y){
        if (x.Birthday < y.Birthday) {return -1;}
        if (x.FacuBirthdaylty > y.Birthday) {return 1;}
        return 0;
    }
    let s = a.sort(SortArray);
    console.log(s);
}

function sortStartYear(newMass){
    
    let a = newMass
    function SortArray(x, y){
        if (x.Birthday < y.Birthday) {return -1;}
        if (x.FacuBirthdaylty > y.Birthday) {return 1;}
        return 0;
    }
    let s = a.sort(SortArray);
    console.log(s);
}

table.addEventListener('click',e => {
    let newMass = creatNewMass(mass)

    switch (e.target.textContent) {
        case "ФИО":
            sortOnFIO(newMass)
            break;
        case "Факультет":
            sortFaculty(newMass)
            break;
        case "Дата рождения":
            sortBirthday(newMass)
            break;
        case "Годы бучения":
            sortStartYear(newMass)
            break;
    
        default:
            break;
    }
    createTable(newMass,massNameTable)
    console.log(mass)
})

function creatNewMass(mass){
    let newMass = []
    for(i=0;i<mass.length;i++){
        newMass.push(mass[i])
    }
    return newMass
}

function error(inputYearBegin){
    // let StartYear = false
    let str = Number(inputYearBegin)
    if(NaN == str){
        StartYear = false
        massError.push("Введите ЧИСЛО в Год начала обучения")
    }
    else{
        if(Number(inputYearBegin)>=2000){
            StartYear = true
        }
        else{
            StartYear = false
            massError.push("Год начала обучения должен быть не меньше 2000")
        }
        
    }
    return StartYear
}

function lookError(massError){

    let error = document.querySelectorAll(".error")
    for(i=0;i<error.length;i++){
        error[i].outerHTML = ''
    }
    
    
    for(let i = 0; i <massError.length;i++){
        let div = document.createElement("div")
        div.classList.add("error")
        div.id = "error"
        div.textContent = massError[i]
        container.append(div)
        console.log(massError)
        massError.length = 0
    }
    console.log(massError)
    
}

// function look(str){
//     let div = document.createElement("div")
//         div.textContent = str
//         container.append(div)
// }

// look("asdasd")

function tableSearch() {
    let phrase = document.getElementById('search-text');
    let table = document.getElementById('table');
    let regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}