let roadMines = [false, false, false, true, true, false, true, true, true, true]
let position = 1;
let ran = 0;
for(i of roadMines){
    console.log(`Танк переместился на позицию ${position}`)
        if (ran==1){
        console.log("танк уничтожен")
        break;
    }
    if (i == true){
        console.log('танк повреждён')
        ran++
    }

    position++
    
}
// let mass = []
// let day_week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
// day = mass[0] % 7
// a = 0
// while(mass.length < 31){ 
//     a++
//     mass.push(a)
// }
// for(i of mass)
// {
//     console.log(i,"января,", day_week[i % 7])
// }
