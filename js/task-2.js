console.log('TASK-2');
const total = 100;
let ordered = 20;
console.log('Количество товаров на складе:', total);
while (ordered < 140) {
    console.log('Единиц товара в заказе:', ordered);
    if (ordered < total) console.log('Заказ оформлен, с вами свяжется менеджер');
    if (ordered > total) console.log('На складе недостаточно товаров!');
    ordered += 50;
}


