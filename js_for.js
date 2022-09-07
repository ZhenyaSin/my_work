


// "||" - если видишь 2 таких пайплайна, то это логическое "или"
// console.log(true || true)
// console.log(true || false) // если есть true или false, и перед ними стоит ||, то отображается true. Если переводить в математику, то "||" будет выступать в роли сложения. 1+0=1
// console.log(false || true)


// // Если видишь &&(2 амперсанда), то это логическое "И". 
// console.log(true && true) 
// console.log(true && false) // в данном случае система не поняла что вы хотите от неё и поэтому вернула false
//Возвращается false. Пример: Если мы говорим бармену: "дайте мне стакан кофе, которое стоит 3 доллара и 5 долларов". Бармен  не поймёт. Потому что это абсурд. 
// Бармен не понял за какую стоимость вы хотите кофе. Здесь тоже самое, если система не понимает, то возвращает false

// Если переводить в математику, то "&&" будет выступать в роли умножения. 1*0=0

// let item_1 = 5;
// let item_2 = 10;

// if (item_1 > 3 && item_2 < 15){
//     console.log("иди кушать")
// }else {
//     console.log("ходи голодный")
// }


// let item_1 = 5;
// let item_2 = 10;
// let item_3 = 100;

// // 20 = 10 + 5 * 2 
// if (item_1 > 3 || item_2 < 15 || item_3 == 100){
//     console.log("иди кушать")
// }else { 
//     console.log("ходи голодный")
// }

// let item_1 = 5;
// let item_2 = 10;
// let item_3 = 100;

// // 20 = 10 + 5 * 2 
// if (item_1 > 3 && item_2 < 15 && item_3 == 100){
//     console.log("иди кушать")
// }else {
//     console.log("ходи голодный")
// }


// let item_1 = 5;
// let item_2 = 10;
// let item_3 = (item_2 > 50)? console.log("Иди кушать") : console.log("Ходи голодный")

// // 20 = 10 + 5 * 2 
// if (item_1 > 3 && item_2 < 15 && item_3 == 100){
//     console.log("иди кушать")
// }else {
//     console.log("ходи голодный")
// }



// ЦИКЛЫ


// let item_1 = 0;
// let item_2 = 20;


// while(item_1 < 20 && item_2 < 30) {
//     console.log(item_1, " = Иди кушать")
//     console.log(item_2, " = --------------")
//     item_1 ++
//     item_2 ++
// }

// let temperature = 0

// while(temperature < 40) { 

//     if (temperature < 10){
//         console.log("temperature = ", temperature, "Cold")
//     } else if (temperature >=10 && temperature < 30){
//         console.log("temperature = ", temperature, "Nice")
//     } else {
//         console.log("temperature = ", temperature, "Ми кукарача")
//     }   temperature++
// }


 

// for (let i = 0; true; i += 2){
    
//     console.log(i , "= FOR")
// }


//  let names =["Katya", 
//              "Alex", 
//              "Ivan",
//              "Ignat",
//              "Andrey",
//              "Vika", ]

// for (item_1 of names){

//     if (item_1 == "Ignat"){
//         break;
//     }
//     console.log(item_1) 
// }


//  let names =["Katya", 
//              "Alex", 
//              "Ivan",
//              "Ignat",
//              "Andrey",
//              "Vika", ]

// for (let item_1 in names){

//     if (item_1 % 2 == 0){
//         console.log(names[item_1], item_1, 2) 
//     }

// }

let names =["Katya", 
"Alex", 
"Ivan",
"Ignat",
"Andrey",
"Vika", ]

let items = names.length
let count = 0
console.log(items)

while (count < items){
    console.log(names[count])
}