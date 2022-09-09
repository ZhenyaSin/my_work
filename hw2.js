// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10

let i = 1;
let result = 1;
while (i < 11) {
result = result *2
i++
}
console.log(result)

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// Вариант 1

// const запрещает перезаписывание переменной
const power = function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++){
        result = result *2
    }
    return result
}

console.log(power(10))

// Вариант номер 2
// * - это оператора умножения
// ** -это оператор возведения в степень
const power2 = function(num) {
    return 2**num
}

console.log(power2(10))

// Вариант 3
const power3 = function(num) {
    return Math.pow(2,num)
}

console.log(power3(10))



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, что бы в первой строчке выводилось :)
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
// :):):):):):)
// :):):):):):):)

let word = ":)"
let result2 = ""
for (let i=1; i<=8; i++) {
result2+=word
console.log(result2)
}

// вариант 2
function printSmile2(stroka, numberOfRows) {
    for (let i = 1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile2(":)", 6)