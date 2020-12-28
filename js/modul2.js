function checkAge(age) {
    if (age >= 18) { // Дополни эту строку
        return 'Вы совершеннолетний человек';
    }

    return 'Вы не совершеннолетний человек';
}

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки


    if (password === ADMIN_PASSWORD) {
        return 'Добро пожаловать!';
    }
    return 'Доступ запрещен, неверный пароль!';
    // Пиши код выше этой строки
}

function checkStorage(available, ordered) {
    // Пиши код ниже этой строки

    if (ordered === 0) {
        return 'В заказе еще нет товаров';
    } if (ordered > available) {
        return 'Слишком большой заказ, на складе недостаточно товаров!';
    }
    return 'Заказ оформлен, с вами свяжется менеджер';
    // Пиши код выше этой строки
}

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];


// Пиши код ниже этой строки
fruits[1] = 'персик';
fruits[3] = 'банан';



// Пиши код ниже этой строки
const fruitsArrayLength = fruits.length;

// Стартовый код
const fruits1 = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex = fruits1.length - 1;
const lastElement1 = fruits1[lastElementIndex];

function getExtremeElements(array) {
    // Пиши код ниже этой строки
    return [array[0], array[array.length - 1]];

    // Пиши код выше этой строки
}

// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.
function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки

    words = message.split(delimeter);

    // Пиши код выше этой строки
    return words;
}

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
function calculateEngravingPrice(message, pricePerWord) {
    // Пиши код ниже этой строки

    return message.split(' ').length * pricePerWord;

    // Пиши код выше этой строки
}
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
    let string;
    // Пиши код ниже этой строки

    string = array.join(delimeter);

    // Пиши код выше этой строки
    return string;
}
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.
function slugify(title) {
    // Пиши код ниже этой строки
    return title.toLowerCase().split(' ').join('-');
    // Пиши код выше этой строки
}
console.log(slugify('Английский для разработчика'));
// Задача 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

const fruits2 = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits2.slice(0, 2);
const nonExtremeEls = fruits2.slice(1, fruits2.length - 1);
const lastThreeEls = fruits2.slice(-3);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// Задача15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку
// Задача 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки

    if (maxLength >= firstArray.concat(secondArray).length) {
        return firstArray.concat(secondArray);
    }
    // return firstArray.concat(secondArray).splice(maxLength - 1, firstArray.concat(secondArray).length - maxLength);
    return firstArray.concat(secondArray).slice(0, maxLength);

    // Пиши код выше этой строки
}
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));

// Задача 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
    console.log(i);
}

// Задача 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
function calculateTotal(number) {
    // Пиши код ниже этой строки
    let j = 0;
    for (let i = 1; i <= number; i += 1) { // Дополни эту строку
        j += i;
    }
    return j;
    // Пиши код выше этой строки
}
console.log('!', calculateTotal(3));
// Задача 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
const fruits4 = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits4.length; i += 1) { // Дополни эту строку
    const fruit = fruits4[i]; // Дополни эту строку
    console.log(fruit);
}

// Задача 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
function calculateTotalPrice(order) {
    let total = 0;
    // Пиши код ниже этой строки
    for (let i = 0; i < order.length; i += 1) { // Дополни эту строку
        total += order[i];
    }
    // Пиши код выше этой строки
    return total;
}
// Задача 21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
    // Пиши код ниже этой строки
    let array = string.split(' ');
    let maximum = array[0].length;
    let j = 0;
    for (let i = 1; i < array.length; i += 1) {
        if (array[i].length > maximum) {
            maximum = array[i].length;
            j = i;
        }
    }
    return array[j];

    // Пиши код выше этой строки
}
// Задача 22
// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.
function createArrayOfNumbers(min, max) {
    const numbers = [];
    let j = min;
    // Пиши код ниже этой строки
    for (let i = 0; i <= max - min; i += 1) {
        numbers.push(j);
        j += 1;
    }

    // Пиши код выше этой строки
    return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));

// Задача 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
function filterArray(numbers, value) {
    // Пиши код ниже этой строки

    let arrayNew = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) arrayNew.push(numbers[i]);
    }
    return arrayNew;

    // Пиши код выше этой строки
}
console.log('задача 23', filterArray([1, 2, 3, 4, 5], 3));
// Задача 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
function checkFruit(fruit) {
    const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

    return fruits.includes(fruit);// Дополни эту строку
}
// Задача 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
    let array3 = [];
    for (let i = 0; i < Math.max(array1.length, array2.length); i += 1) {
        if (Math.min(array1.length, array2.length) === array1.length) {
            if (array2.includes(array1[i]) === true) array3.push(array1[i]);
        } else
            if (array1.includes(array2[i]) === true) array3.push(array2[i]);
    }

    return array3;

    // Пиши код выше этой строки
}
console.log('Задача 25', getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Задача 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
function calculateTotalPrice1(order) {
    let total = 0;
    // Пиши код ниже этой строки

    for (const elementArray of order) {
        total += elementArray;
    }

    // Пиши код выше этой строки
    return total;
}
console.log('Задача 26', calculateTotalPrice1([12, 85, 37, 4]));

// Задача 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray1(numbers, value) {
    // Пиши код ниже этой строки
    const filteredNumbers = [];

    for (const elementArray of numbers) {
        const number = elementArray;

        if (number > value) {
            filteredNumbers.push(number);
        }
    }

    return filteredNumbers;
    // Пиши код выше этой строки
}
console.log('Задача 27', filterArray([1, 2, 3, 4, 5], 3));
// Задача 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

// Задача 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
// Проверка на четность

// function isEven (num) {
//   return num % 2 === 0;
// }

function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки

    const array = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) array.push(i);
    }
    return array;

    // Пиши код выше этой строки
}

console.log('Задача 29', getEvenNumbers(3, 11));
console.log('Задача 29', getEvenNumbers(6, 12));

// Задача 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
const start2 = 6;
const end2 = 27;
let number;

for (let i = start2; i < end2; i += 1) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
}
// Задача 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.


function findNumber(start1, end, divisor) {
    // Пиши код ниже этой строки
    let number;

    for (let i = start1; i < end; i += 1) {
        if (i % divisor === 0) {
            return i;
        }
    }


    // Пиши код выше этой строки
}
// Задача 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
function includes(array, value) {
    // Пиши код ниже этой строки
    let check = false;
    for (const vallueArray of array) {
        if (value === vallueArray) {
            check = true;
        }
    }
    return check;


    // Пиши код выше этой строки
}
console.log('Задача 32', includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
