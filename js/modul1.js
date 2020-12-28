function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
    const totalPrice = orderedQuantity * pricePerDroid;
    if (totalPrice <= customerCredits) {
        message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ` + [customerCredits - totalPrice] + ' кредитов';
    }
    else { message = 'Недостаточно средств на счету!'; }
    // Пиши код выше этой строки
    return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));


function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    if (password === null) { // Дополни эту строку
        message = 'Отменено пользователем!';
    } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
        message = 'Добро пожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль!';
    }

    return message;
}

function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // дополни эту строку

    return isInRange;
}
console.log(isNumberInRange(10, 30, 17));

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip' // дополни эту строку

    return canAccessContent;
}
console.log(checkIfCanAccessContent('pro'));
console.log(checkIfCanAccessContent('starter'));
console.log(checkIfCanAccessContent('vip'));

function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Дополни эту строку

    return isNotInRange;
}
console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Пиши код ниже этой строки

    if (totalSpent >= 50000) { discount = GOLD_DISCOUNT; }
    else if (totalSpent >= 5000 && totalSpent < 20000) { discount = BRONZE_DISCOUNT; }
    else if (totalSpent >= 20000 && totalSpent <= 50000) { discount = SILVER_DISCOUNT; }
    else if (totalSpent < 5000) { discount = BASE_DISCOUNT; }
    // Пиши код выше этой строки
    return discount;
}
console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));


function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки

    // if (ordered > available) {
    //   message = 'На складе недостаточно товаров!';
    // } else {
    //   message = 'Заказ оформлен, с вами свяжется менеджер';
    // }

    message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
    // Пиши код выше этой строки
    return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(150, 180));

function checkPassword1(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    // Пиши код ниже этой строки
    message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!';
    // Пиши код выше этой строки
    return message;
}
console.log(checkPassword1('jqueryismyjam'));
console.log(checkPassword1('angul4r1sl1f3'));

function getSubscriptionPrice(type) {
    let price;
    // Пиши код ниже этой строки

    switch (type) { // Дополни эту строку
        case 'professional':// Дополни эту строку
            price = 20; // Дополни эту строку
            break;

        case 'organization':// Дополни эту строку
            price = 50; // Дополни эту строку
            break;

        case 'starter':// Дополни эту строку
            price = 0; // Дополни эту строку
            break;
    }

    // Пиши код выше этой строки
    return price;
}
console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('starter'));

function checkPassword3(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    switch (password) {
        case null:
            message = 'Отменено пользователем!';
            break;
        case 'jqueryismyjam':
            message = 'Добро пожаловать!';
            break;
        default:
            message = 'Доступ запрещён, неверный пароль!';
    }


    // if (password === null) {
    //     message = 'Отменено пользователем!';
    // } else if (password === ADMIN_PASSWORD) {
    //     message = 'Добро пожаловать!';
    // } else {
    //     message = 'Доступ запрещён, неверный пароль!';
    // }

    return message;
}

function getShippingCost(country) {
    let message;
    // Пиши код ниже этой строки
    const countries = ['Китай', 'Чили', 'Австралия', 'Ямайка'];
    const price = [100, 250, 170, 120];
    let priceGet;
    let normalizedInput = country.toLowerCase();
    let j;

    for (let i = 0; i < 4; i += 1) {
        switch (normalizedInput) {
            case countries[i].toLowerCase():
                priceGet = price[i];
                j = i;
                break;
        }
    }
    if (j != undefined) message = `Доставка в ${countries[j]} будет стоить ${priceGet} кредитов`;
    else message = 'Извините, в вашу страну доставки нет';

    // Пиши код выше этой строки
    return message;
}
console.log(getShippingCost('Австралия'));
console.log(getShippingCost('Германия'));
console.log(getShippingCost('Китай'));

function getShippingCost1(country) {
    let message;
    // Пиши код ниже этой строки

    switch (country) {
        case 'Китай':
            message = `Доставка в ${country} будет стоить 100 кредитов`;
            break;
        case 'Чили':
            message = `Доставка в ${country} будет стоить 250 кредитов`;
            break;
        case 'Австралия':
            message = `Доставка в ${country} будет стоить 170 кредитов`;
            break;
        case 'Ямайка':
            message = `Доставка в ${country} будет стоить 120 кредитов`;
            break;
        default:
            message = `Извините, в вашу страну доставки нет`;
            break;

    }

    // Пиши код выше этой строки
    return message;
}
console.log(getShippingCost1('Австралия'));
console.log(getShippingCost1('Германия'));
console.log(getShippingCost1('Китай'));

function getNameLength(name) {
    const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

    return message;
}

const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];

// Пиши код выше этой строки

function getSubstring(string, length) {
    const substring = string.slice(0, length); // Дополни эту строку

    return substring;
}
console.log(getSubstring('Привет мир', 3));
console.log(getSubstring('Привет мир', 6));
console.log(getSubstring('Привет мир', 8));
console.log(getSubstring('Привет мир', 10));
console.log(getSubstring('Привет мир', 0));

function formatMessage(message, maxLength) {
    let result;
    // Пиши код ниже этой строки

    result = maxLength >= message.length ? message : message.slice(0, maxLength) + '...';
    //   if (maxLength<=message.lenght) {
    //     result=message;}
    //     else {
    //       result=message.slice(0,maxLength)+'...';
    //     }
    // Пиши код выше этой строки
    return result;
}
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Дополни эту строку
    return normalizedInput;
}
function checkForName(fullName, name) {
    const result = fullName.includes(name); // Дополни эту строку
    return result;
}

console.log(checkForName('Егор Колбасов', 'Егор'));

function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
    // Пиши код выше этой строки
    return result;
}
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));