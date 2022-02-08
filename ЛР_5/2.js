let price = 200000
let numberOfGoods = 5
console.log('Цена корзины:',price)
function calculate(price,numberOfGoods,promocode = null){
    if (promocode == 'ДАРИМ300'){
        if(price >300){console.log('1 скидка сработала, цена корзины : ',price = price - 300)}
        else if(price < 300){console.log('1 скидка сработала, цена корзины : ',price = 0)}
    }
    if(numberOfGoods>=10){ console.log('2 скидка сработала, цена корзины : ',price = price * 0.95)}
    if(price > 50000){console.log('3 скидка сработала, сумма корзины : ',price =(price -50000) * 0.8+50000)}
    if(promocode == 'СКИДКА15' && price >= 20000){console.log('4 скидка сработала, цена корзины : ',price = price * 0.85)}

    return
}
calculate(price,numberOfGoods,'ДАРИМ300')