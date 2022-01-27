let name = "rOma";
let surname = "DvoYnishev";
let newName = name.toLowerCase();
let newSurname = surname.toLowerCase();
normal_name = newName[0].toUpperCase() + newName.slice(1);
normal_surname = newSurname[0].toUpperCase() + newSurname.slice(1);
console.log(normal_name, normal_surname);
name === normal_name ? console.log("Изменений в имени не произошло"):console.log("Изменения в имени произошли");
surname === normal_surname ? console.log("Изменений в фамилии не произошло"):console.log("Изменения в фамилии произошли");