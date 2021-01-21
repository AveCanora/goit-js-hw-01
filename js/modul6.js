
// TASK-1*****************************************************
// Метод forEach(callback)
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки

//     for (let i = 0; i < orderedItems.length; i += 1) {
//       totalPrice += orderedItems[i];
//     }

//     // Пиши код выше этой строки
//     return totalPrice;
//   }

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки

    orderedItems.forEach(function (number, index) {
        totalPrice += orderedItems[index];
    });

    // Пиши код выше этой строки
    return totalPrice;
}
// TASK-2*****************************************************
// Задача. Фильтрация массива чисел
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//       }
//     }

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки


    numbers.forEach(function (number, index) {
        if (numbers[index] > value) {
            filteredNumbers.push(numbers[index]);
        }
    });


    // Пиши код выше этой строки
    return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5, 6, 6], 4));

// TASK-3*****************************************************
// Задача. Общие элементы
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки

    firstArray.forEach(function (number, index) {
        if (secondArray.includes(firstArray[index])) {
            commonElements.push(firstArray[index]);
        }
    });

    return commonElements;
    // Пиши код выше этой строки
}
// TASK-4*****************************************************
// Стрелочные функции.
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// // Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//     // Пиши код выше этой строки
//     return quantity * pricePerItem;
//   }


// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
}

// TASK-5*****************************************************
// Неявный возврат
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   };
//   // Пиши код выше этой строки

// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки


// TASK-6*****************************************************
// Стрелочные функции как коллбеки
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// // Пиши код ниже этой строки
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });

//     return totalPrice;
//   }
//   // Пиши код выше этой строки

// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach(item => totalPrice += item);

    return totalPrice;
}
// Пиши код выше этой строки

// TASK-7*****************************************************
//   Задача. Фильтрация массива чисел 2.0
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Пиши код выше этой строки
    return filteredNumbers;
}

// TASK-8*****************************************************
//   Задача. Общие элементы 2.0
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }


// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Пиши код выше этой строки
    return commonElements;
}

// TASK-9*****************************************************
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// // Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     // Пиши код выше этой строки
//   }

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
            newArray.push(numbers[i] + value);
        } else newArray.push(numbers[i]);
    }
    return newArray;
    // Пиши код выше этой строки
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// TASK-10*****************************************************
// Метод map()
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(element => element.length);

// TASK-11*****************************************************
// Метод map() и массив объектов
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(book => book.title);

// TASK-12*****************************************************
// Метод flatMap()
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое']
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика']
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика']
    }
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);

// TASK-13*****************************************************
// Задача. Имена пользователей
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// Пиши код ниже этой строки
const getUserNames = users => {
    return users.map(user => user.name);

};
// Пиши код выше этой строки

// TASK-14****************************************************
// Задача. Почты пользователей
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// Пиши код ниже этой строки
const getUserEmails = users => {
    return users.map(user => user.email);

};
// Пиши код выше этой строки

// TASK-15****************************************************
//   Методы filter и find
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().


const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(value => value % 2 === 0);
const oddNumbers = numbers.filter(value => value % 2 != 0);

// TASK-16****************************************************
// Фильтрация уникальных элементов
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
// а в переменной uniqueGenres массив уникальных жанров - без повторений.
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое']
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика', 'мистика']
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика', 'приключения']
    }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// TASK-17****************************************************
// Метод filter() и массив объектов
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

// TASK-18****************************************************
// Задача. Пользователи с цветом глаз
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};
// Пиши код выше этой строки

// TASK-19****************************************************

// Задача. Пользователи в возрастной категории
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge);
};
// Пиши код выше этой строки

// TASK-20****************************************************
// Задача. Пользователи с другом
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей
// у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39
    }
]
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};
// Пиши код выше этой строки
console.log(getUsersWithFriend(users, 'Briana Decker'));

// TASK-21****************************************************
// Задача. Список друзей
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.


const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39
    }
]
// Пиши код ниже этой строки
const getFriends = (users) => {

    const allFriends = users.flatMap(user => user.friends);
    return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);

};
// Пиши код выше этой строки
// TASK-22****************************************************
// Задача. Активные пользователи
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// Пиши код ниже этой строки
const getActiveUsers = (users) => {
    return users.filter(user => user.isActive === true);

};
// Пиши код выше этой строки

// TASK-23****************************************************
//   Задача. Неактивные пользователи
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
    return users.filter(user => user.isActive === false);
};
// Пиши код выше этой строки

// TASK-24****************************************************

// Метод find()
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.


const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

// TASK-25****************************************************
// Задача. Пользователь с почтой

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email)
// совпадает со значением параметра email.

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};
// Пиши код выше этой строки

// TASK-26****************************************************
//  Метод every()
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 != 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 != 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 != 0);

// TASK-27****************************************************
// Задача. Все ли пользователи активны
// Дополни функцию isEveryUserActive(users) так,
// чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
    return users.every(user => user.isActive === true);
};
// Пиши код выше этой строки

// TASK-28****************************************************
//  Используя метод some() дополни код так, чтобы:

//  В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
//  В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
//  В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
//  В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
//  В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
//  В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.


const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 != 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 != 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 != 0);


// TASK-29****************************************************
// Задача. Есть ли активные пользователи
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.


// Пиши код ниже этой строки
const isAnyUserActive = users => {
    return users.some(user => user.isActive === true);
};
// Пиши код выше этой строки

// TASK-30****************************************************
//  Метод reduce()
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) => {
    return previousValue + number;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

// TASK-31****************************************************
// Метод reduce() и массив объектов
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, player) => { return total + player.playtime / player.gamesPlayed }, 0);
console.log(players);
console.log(totalAveragePlaytimePerGame);

// TASK-32****************************************************
// Задача. Общий баланс пользователей
// Дополни функцию calculateTotalBalance(users) так,
// чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// Пиши код ниже этой строки
const calculateTotalBalance = users => {
    return users.reduce((total, user) => {
        return total + user.balance
    }, 0);
};
// Пиши код выше этой строки

// TASK-33****************************************************
//  Задача. Общее количество друзей
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends)
// всех пользователей из массива users.
// Пиши код ниже этой строки
const getTotalFriendCount = users => {
    return users.reduce((total, user) => {
        return total + user.friends.length
    }, 0);
};
// Пиши код выше этой строки

// TASK-34****************************************************
// Метод sort()
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
// а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

// TASK-35****************************************************
// Свой порядок сортировки чисел
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// TASK-36****************************************************
// Свой порядок сортировки строк
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
];
// Пиши код ниже этой строки
const authorsInAlphabetOrder = [...authors].sort();
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// TASK-37****************************************************
// Сортировка объектов
// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
const sortedByAscendingRating = [...books].sort((firstRate, secondRate) => firstRate.rating - secondRate.rating);
const sortedByDescentingRating = [...books].sort((firstRate, secondRate) => secondRate.rating - firstRate.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

// TASK-38****************************************************
// Задача. Сортировка по балансу
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный
//  по возрастанию их баланса (свойство balance).

// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
    return users.sort((firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance);
};
// Пиши код выше этой строки

// TASK-39****************************************************
// Задача.Сортировка по количеству друзей
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный
// по убыванию количества их друзей (свойство friends).
const users =
    [
        {
            name: 'Moore Hensley',
            email: 'moorehensley@indexia.com',
            eyeColor: 'blue',
            friends: ['Sharron Pace'],
            isActive: false,
            balance: 2811,
            gender: 'male'
        },
        {
            name: 'Sharlene Bush',
            email: 'sharlenebush@tubesys.com',
            eyeColor: 'blue',
            friends: ['Briana Decker', 'Sharron Pace'],
            isActive: true,
            balance: 3821,
            gender: 'female'
        },
        {
            name: 'Ross Vazquez',
            email: 'rossvazquez@xinware.com',
            eyeColor: 'green',
            friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
            isActive: false,
            balance: 3793,
            gender: 'male'
        },
        {
            name: 'Elma Head',
            email: 'elmahead@omatom.com',
            eyeColor: 'green',
            friends: ['Goldie Gentry', 'Aisha Tran'],
            isActive: true,
            balance: 2278,
            gender: 'female'
        },
        {
            name: 'Carey Barr',
            email: 'careybarr@nurali.com',
            eyeColor: 'blue',
            friends: ['Jordan Sampson', 'Eddie Strong'],
            isActive: true,
            balance: 3951,
            gender: 'male'
        },
        {
            name: 'Blackburn Dotson',
            email: 'blackburndotson@furnigeer.com',
            eyeColor: 'brown',
            friends: ['Jacklyn Lucas', 'Linda Chapman'],
            isActive: false,
            balance: 1498,
            gender: 'male'
        },
        {
            name: 'Sheree Anthony',
            email: 'shereeanthony@kog.com',
            eyeColor: 'brown',
            friends: ['Goldie Gentry', 'Briana Decker'],
            isActive: true,
            balance: 2764,
            gender: 'female'
        }
    ]
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
    return [...users].sort((firstFriends, secondFriends) => secondFriends.friends.length - firstFriends.friends.length);
};
// Пиши код выше этой строки

console.log(sortByDescendingFriendCount(users));

// TASK-40****************************************************
// Задача. Сортировка по имени
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в
// алфавитном порядке.
// Пиши код ниже этой строки
const sortByName = users => {
    return [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
};

// Пиши код выше этой строки


// TASK-41****************************************************
// Цепочки методов (чейнинг, chaining)
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки


const names = [...books].filter(book => book.rating >= MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));

// TASK-42****************************************************
// Задача. Пользователи и друзья
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по
// возрастанию количества их друзей (свойство friends).

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male'
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female'
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male'
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female'
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male'
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male'
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female'
    }
]
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

console.log(getNamesSortedByFriendCount(users));

// TASK-43****************************************************
// Задача. Имена друзей
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends)
// отсортированный по алфавиту .
const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male'
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female'
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male'
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female'
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male'
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male'
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female'
    }
]

const getSortedFriends = users => {
    return [...users].flatMap(user => user.friends).filter((friends, index, array) => array.indexOf(friends) === index).sort((a, b) => a.localeCompare(b));
};

console.log(getSortedFriends(users));

// TASK-44****************************************************
// Задача. Общий баланс
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance),
// пол которых (свойство gender) совпадает со значением параметра gender.

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {

};
// Пиши код выше этой строки


const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male'
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female'
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male'
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female'
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male'
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male'
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female'
    }
]


// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
    return [...users].filter(user => user.gender === gender).reduce((total, user) => { return total + user.balance }, 0)
};

console.log(getTotalBalanceByGender(users, 'male'));