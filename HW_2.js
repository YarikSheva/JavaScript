// Variant: A
let letter = /[a-zA-Zа-яА-Я]/;
let bigletters = /[A-ZА-Я]/;
let numbers = /[0-9]/;
var login = "Shev4enka7@gmail.com";


if (typeof login !== 'string') {
console.log ("Тип данных - ", typeof login);
    } else if (login.length == 0) {
console.log('строка не может быть пустой');
    } else if (!letter.test(login)) {
console.log("Необходима хотя бы 1 буква");
    } else if (login.length < 5) {
console.log("Меньше 5");
    } else if (login.length > 64) {
console.log ("Больше 64");
    } else if (!bigletters.test(login)) {
console.log("Хотя бы одна заглавная буква");
    } else if (!numbers.test(login)) {
console.log("Должна быть хотя бы одна цифра");
    } else if (!login.includes("@")) {
console.log('Должна быть хотя бы одна @');
    }
console.log("Everything Okay")

// Variant: B
let email_1 = "Shev4enka7@gmail.com"
console.log(/[A-ZА-ЯЁ]/.test(email_1))

function index_data(email_1) {
    if(typeof(email_1) != "string" ) {
        console.log("Wrong type data")
    } else if(email_1 == "") {
        console.log("Can not be empty")
    } else if(email_1.indexOf("@") == - 1){
        console.log("Not @")
    } else if(/[a-zа-яё]/i.test(email_1) == false) {
        console.log("Not small letter")
    } else if(/[A-ZА-ЯЁ]/.test(email_1) == false) {
        console.log("Not big letter")
    } else if(/[0-9]/.test(email_1) == false) {
        console.log("Not number")
    } else if(email_1.length < 5) {
        console.log("Less then 5 symbols")
    } else if(email_1.length > 64) {
        console.log("More then 64 symbols")
    }else{
        console.log("Correct!")
    }
}

index_data(email_1);