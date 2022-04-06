export function createLocalStor(input, num, key){
    mass.push({
        id: num,
        name: input,
        done: false,
    })
    localStorage.setItem(key, JSON.stringify(mass))
}