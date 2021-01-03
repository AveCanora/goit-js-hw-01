console.log('************TASK-6************'); // ВАРИАНТ УЧИТЕЛЯ
let total = 0;
while (true) {
    let input = prompt('Введи число!');
    if (input === null) {
        console.log('Отменено пользователем!');
        break;
    }
    input = Number(input);//NaN
    const notANumber = Number.isNaN(input); //true
    if (notANumber) {
        console.log('Было введено не число, пропускаем текущую итерацию!');
        continue;
    }
    total += input;
}

alert(`Сумма веденных чисел составляет: ${total}`);
