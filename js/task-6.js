console.log('************TASK-6************');

let input;
let total = 0;
let inputCheck = 0; /* промежуточная переменная для проверки введенных данных */
// пока не нажата кнопка Отмена
while (inputCheck != null) {
    input = prompt(`Введите, пожалуйста, числа. Числа суммируются, пока не нажата кнопка "Отмена". Текущее значение суммы: ${total}`);
    // если нажали кнопку Отмена
    if (input != null) {
        if (input.trim().length == 0) inputCheck = Number('a'); /* проверка на введение пустого значения или пробела */
        else inputCheck = Number(input);  /* если введенное значение не пустое */
    }
    else { /* иначе: выход из цикла*/
        inputCheck = null;
        console.log(inputCheck);
        break;
    }
    if (isNaN(inputCheck) === false) { /*если введенное значение является числом */
        total += Number(input);
        inputCheck = Number(input);

    }
    else { /*иначе вводим значения, пока не введем число или не нажмем Отмена */
        while (isNaN(inputCheck) === true) {
            input = prompt('Было введено не число, попробуйте еще раз!');
            if (input != null) { /* проверка на Отмена*/
                if (input.trim().length == 0) inputCheck = Number('a');
                else { /*иначе: проверяем на тип данных, если число то суммируем total */
                    inputCheck = Number(input);
                    if (isNaN(inputCheck) === false) {
                        total += Number(input);
                    }
                }
            } else {/* иначе: выход из цикла*/
                inputCheck = null;
                break;
            }

        }
    }
}

alert(`Сумма веденных чисел составляет: ${total}`);
