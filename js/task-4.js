console.log('************TASK-4************');
const credits = 23580;
const pricePerDroid = 3000;
let message;


let quantity = prompt('Введите, пожалуйста, количество дроидов, которые вы хотите купить');
if (quantity == null) message = 'Отменено пользователем!';
else {

    if (isNaN(Number(quantity)) == false) {
        let totalPrice = quantity * pricePerDroid;
        if (totalPrice > credits) message = 'Недостаточно средств на счету!'
        else message = `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов!`;
        // else message = 'Вы купили' + quantity + 'дроидов, на счету осталось' + credits - totalPrice + 'кредитов!';
    }
    else message = 'Вы ввели данные не корректно!';
}

alert(message);