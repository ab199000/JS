let name = "rOma";
let surname = "DvoYnishev";
let newName = name.toLowerCase();
let newSurname = surname.toLowerCase();
normal_name = newName[0].toUpperCase() + newName.slice(1);
normal_surname = newSurname[0].toUpperCase() + newSurname.slice(1);
console.log(normal_name, normal_surname);
name === normal_name ? console.log("Изменений в имени не было") : console.log("В имени произошли изменения");
surname === normal_surname ? console.log("Изменений в фамилии не было") : console.log("В фамилии произошли изменения");
