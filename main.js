let result = []
let arr = []

function func() {
    let firstQuestion = prompt("Введите цвет");
    if (firstQuestion.match(/["a-zA-Zа-яА-я"]+/)) {
         result.push(car = {
            color: firstQuestion,
        })
    }
    else {
        alert("Не коректный цвет");
        
    }
    let secondQuestion = prompt("Введите год");
    if (secondQuestion.match(/[0-9]+/)) {
         result.push(car = {
            year: secondQuestion,
        })
    }
    else {
        alert("Не верный год");
        
    }
    let thirdQuestion = prompt("Введите цену");
    if (thirdQuestion.match(/[0-9]+/)) {
        result.push(car = {
            price: thirdQuestion,
        })
    }
    else {
        alert("Введите коректную цену");
    }
    let fourthQuestion = prompt("Введите пробег");
    if (fourthQuestion.match(/[0-9]+/)) {
        result.push(car = {
            mileage: fourthQuestion,
        })
    }
    else {
        alert("Введите коректный пробег")
    }
    let fifthQuestion = prompt("Введите тип кузова");
    if (fifthQuestion.match(/[a-zA-Zа-яА-я]+/)) {
        result.push(car = {
            bodyType: fifthQuestion,
        })
    } else {
        alert("Тип кузова указан не верно");
    }
    return  car = {
        color: firstQuestion,
        year: secondQuestion,
        price: thirdQuestion,
        mileage: fourthQuestion,
        bodyType: fifthQuestion,

    }
    result.push(car)



}
func()
console.log(car);
console.log(`Цвет : ${car.color}. Год выпуска : ${car.year} г. Цена : ${car.price} $ Пробег : ${car.mileage} км. Тип кузова : ${car.bodyType}`);