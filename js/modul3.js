
// TASK-1*****************************************************
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение 'https://via.placeholder.com/640x480';
// descr - описание, значение 'Просторная квартира в центре';
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ['premium', 'promoted', 'top'].
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
}

// TASK-2*****************************************************

// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение 'Генри';
// phone - телефон, значение '982-126-1588';
// email - почта, значение 'henry.carter@aptmail.com'.

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
        name: 'Генри',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
};

// TASK-3*****************************************************
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Пиши код выше этой строки

// TASK-4*****************************************************
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerEmail = apartment.owner.email;
const ownerPhone = apartment.owner.phone;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];
// Пиши код выше этой строки

// TASK-5*****************************************************
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Пиши код выше этой строки


// TASK-6*****************************************************
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
        name: 'Генри',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com'
    }
};

// Пиши код ниже этой строки
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push('trusted');


// TASK-7*****************************************************
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
        name: 'Генри Сибола',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com'
    }
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Ямайка';
apartment.location.city = 'Кингстон';


// TASK-8*****************************************************
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств
const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
    // Пиши код ниже этой строки

    name,
    price,
    image,
    tags,

    // Пиши код выше этой строки
};


// TASK-9*****************************************************
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
    // Пиши код ниже этой строки

    [emailInputName]: 'henry.carter@aptmail.com',
    [passwordInputName]: 'jqueryismyjam',



    // Пиши код выше этой строки
};
// TASK-10****************************************************
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
}
// TASK-11****************************************************
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
const keys = [];
const values = [];
const advert = {
    service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
    // Пиши код ниже этой строки
    if (apartment.hasOwnProperty(key)) {
        keys.push(key);
        values.push(apartment[key]);
    }
    // Пиши код выше этой строки
}
// TASK-12****************************************************
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
function countProps(object) {
    let propCount = 0;
    // Пиши код ниже этой строки

    for (const key in object) {
        // Пиши код ниже этой строки
        if (object.hasOwnProperty(key)) {
            propCount += 1;
        }
        // Пиши код выше этой строки
    }
    // Пиши код выше этой строки
    return propCount;
}
// TASK-13****************************************************
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (const key of keys) {
    values.push(apartment[key]);
}
// TASK-14****************************************************
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = 0;
    const keys = Object.keys(object);
    for (const key of keys) {
        propCount += 1;
    }
    return propCount;
    // Пиши код выше этой строки
}

// TASK-15****************************************************
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// TASK-16****************************************************
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты
function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
    const keys = Object.keys(salaries);
    for (const key of keys) {
        totalSalary += salaries[key];
    }
    // Пиши код выше этой строки
    return totalSalary;
}

// TASK-17****************************************************
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors
const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const key of colors) {
    hexColors.push(key.hex);
    rgbColors.push(key.rgb);
}

// TASK-18****************************************************
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    // Пиши код ниже этой строки
    for (const key of products) {

        if (key.name === productName) {
            return key.price;
        }

    }
    return null;
    // Пиши код выше этой строки
}

console.log(getProductPrice('Радар'));
console.log(getProductPrice('Дроид'));
console.log(getProductPrice('Захват'));

// TASK-19****************************************************
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    // Пиши код ниже этой строки
    const arrayName = [];
    const keys = Object.keys(products);
    for (const key of products) {
        if (key[propName] != undefined) arrayName.push(key[propName]);
    }
    return arrayName;

    // Пиши код выше этой строки
}
console.log(getAllPropValues('price'));
console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('category'));

// TASK-20****************************************************
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    for (const key of products) {
        if (key.name === productName) return key.price * key.quantity;
    }

    return 0;
    // Пиши код выше этой строки
}

console.log(calculateTotalPrice('Бластер'));
console.log(calculateTotalPrice('Дроид'));


// TASK-21***************************************************
// Деструктуризация объектов
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.


