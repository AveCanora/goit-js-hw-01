
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
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};
// Пиши код ниже этой строки

const { yesterday, today, tomorrow } = highTemperatures

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


// TASK-22***************************************************
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'

const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};
// Пиши код ниже этой строки

const { yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures


// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

// TASK-23***************************************************
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};
// Пиши код ниже этой строки


const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures


// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// TASK-24***************************************************
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
}
// TASK-25***************************************************
//   Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg
const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};
// Пиши код ниже этой строки

const {
    today: {
        low: lowToday,
        high: highToday,
        icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
    tomorrow: {
        low: lowTomorrow,
        high: highTomorrow,
        icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
} = forecast;

// TASK-26***************************************************
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {

    const {
        today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh }
    } = forecast;
    //const todayLow = forecast.today.low;
    // const todayHigh = forecast.today.high;
    //const tomorrowLow = forecast.tomorrow.low;
    // const tomorrowHigh = forecast.tomorrow.high;

    // Пиши код выше этой строки
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// TASK-27***************************************************
// Операция spread при передаче аргументов
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// TASK-28***************************************************
// Операция spread при создании нового массива
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// TASK-29***************************************************
// Операция spread при создании нового объекта
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
