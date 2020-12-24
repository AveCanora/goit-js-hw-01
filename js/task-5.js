console.log('************TASK-5************');

const countries = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка'];
const price = [100, 250, 170, 80, 120];
let countryInput = prompt('Введите, пожалуйста, страна, в которую необходимо осуществить доставку.');
let priceGet;
let normalizedInput = countryInput.toLowerCase();
let j;

for (let i = 0; i < 4; i += 1) {
    switch (normalizedInput) {
        case countries[i].toLowerCase():
            priceGet = price[i];
            j = i;
            break;
    }
}
if (j != undefined) alert(`Доставка в ${countries[j]} будет стоить ${priceGet} кредитов.`);
else alert('В выбранную страну не осуществляется доставка!');
