export function changeItemDone(mass, li){
    mass.map(obj => {
        console.log(li)
        if (obj.id === li & obj.done === false) {
            console.log("теперь true")
            obj.done = true;
            console.log(obj.id)
        } else if (obj.id === li & obj.done === true) {
            console.log("теперь false")
            obj.done = false;
        }
    })
}