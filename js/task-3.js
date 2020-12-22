console.log('************TASK-3************');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Введите пароль');
if (message == null) message = 'Отменено пользователем!';
else
    if (message == ADMIN_PASSWORD) message = 'Добро пожаловать!';
    else
        if (message != ADMIN_PASSWORD) message = 'Доступ запрещен, неверный пароль!';
alert(message);