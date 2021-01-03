const string = "JavaScript";
const letters = string.split('');
let invertedString = '';
for (const letter of letters) {
    const isEqual = letter === letter.toLowerCase();
    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(invertedString);