let pass = "_1234-";
pass.length>= 4 && (pass.includes("-",pass) || pass.includes("_",pass)) ? console.log("Подходит") : console.log("Не подходит");