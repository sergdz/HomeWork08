
function func() {
    let arr = [
        "красный", "оранжевый", "желтый", "зеленый", "синий", "фиолетовый",
        "белый", "черный", "голубой", "серый","Красный", "Оранжевый", 
        "Желтый", "Зеленый", "Синий", "Фиолетовый",
        "Белый", "Черный", "Голубой", "Серый"
    ];
    let firstQuestion = prompt("Введите цвет");
    if (firstQuestion === arr.find(string => string == firstQuestion)) {
         car = {
            color: firstQuestion,
        }
    }
    else {
        alert("Не коректный цвет");
        
    }
    let secondQuestion = parseInt(prompt("Введите год"));
    if (secondQuestion >= 1940 && secondQuestion <=2022) {
         car = {
            year: secondQuestion,
        }
    }
    else {
        alert("Не верный год");
        
    }
    let thirdQuestion = parseInt(prompt("Введите цену"));
    if (thirdQuestion > 0 && thirdQuestion < 1000000) {
        car = {
            price: thirdQuestion,
        };
    }
    else {
        alert("Введите коректную цену");
    }
    let fourthQuestion = parseInt(prompt("Введите пробег"));
    if (fourthQuestion > 0 && fourthQuestion < 500000) {
        car = {
            mileage: fourthQuestion,
        }
    }
    else {
        alert("Введите коректный пробег");
    };
    let body = ["Седан", "Универсал", "Хэтчбек", "Лифтбек", "Купе", "Лимузин", "Кабриолет", "Внедорожник"  ];
    let fifthQuestion = prompt("Введите тип кузова");
    if (fifthQuestion == body.find(string => string === fifthQuestion)) {
        car = {
            bodyType: fifthQuestion,
        };
    } else {
        alert("Тип кузова указан не верно");
    }
    return  car = {
        color: firstQuestion,
        year: secondQuestion,
        price: thirdQuestion,
        mileage: fourthQuestion,
        bodyType: fifthQuestion,

    };
};
func();
console.log(car);
console.log(`Цвет : ${car.color}. Год выпуска : ${car.year} г. Цена : ${car.price} $ Пробег : ${car.mileage} км. Тип кузова : ${car.bodyType}`);