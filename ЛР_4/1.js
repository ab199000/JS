let phrase = "нидо";
let phrase_backwards =[];
let normal_phrase = '';
for (i = phrase.length - 1; i >=0; i--)
{
    normal_phrase += phrase[i]
}
// for(let i of phrase_backwards){
//     normal_phrase += phrase_backwards[i]
// }
console.log(normal_phrase)