"use strict"
let newArr = [1, 2, 'три', 'четыре',4,6];
let newObject = {}
let filterArr = [];
function getArrObjects(arr){
    
    for (let i = 0; i < arr.length; i++) {
            newObject= {
            value: arr[i],
            label: arr[i]
        }
        filterArr.push(newObject)
    }
    // console.log("value" in filterArr[1])
    return filterArr
}

// console.log("value" in filterArr[1])     не обращать внимания
// console.log(filterArr)                   кое что проверял

let country = [
  {
    value: "Mr",
    label: 'Mister',
  },
  {
    value: "Ms",
    label: "Missis",
  },
  {
    value: "Rus",
    label: "Russia",
  },
  {
    value: "Gg",
    label: "Good game",
  }
]
    let select = document.createElement('select');
    function getSelect(arr,str){
        for(let i = 0; i<arr.length; i++){
        select.append(document.createElement('option'))
        select[i].innerHTML = arr[i].label
        select[i].setAttribute('value', arr[i].value) 
        if(arr[i].value == str){select.options[i].selected = true}

      }
    document.body.append(select)
    return select
}
// getSelect(country,"Gg")   //раскоментить для первого задания
getArrObjects(newArr)  //для второго
getSelect(filterArr)   //для второго
