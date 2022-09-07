
// || - логическое "или"
// console.log("1 -- " + true || true)
// console.log("2 -- " + true || false)
// console.log("3 -- " + false || true)

 
// // // && - логическое и
// // console.log("3 -- " + false && true)
// // console.log("3 -- " + true && false)


// let temperature = 0;
// let item_2 = 20;
// // let item_3 = 50;

// // if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
// //     console.log("Иди кушать")
// // } else {
// //     console.log("ходи голодный")
// // }

// // Цикл while(бесконечный цикл)
// while(temperature < 40) {

// if (temperature < 10){
//     console.log("temperature = ", temperature, "Холодно")
// } else if (temperature >= 10 && temperature < 30) {
//     console.log("temperature = ", temperature, "Хорошо!!!!")
// } else{
//     console.log("Капец!!")
// }
// temperature++
// }


// //     console.log(item_1, " = Иди кушать")
// //     console.log(item_2, " = -------")
// //     item_1++ 
// //     item_2++ // ++ означает каждый раз приращивать на одну единицу
// // 

// цикл for
// что было на 2 шага, то использовать =+ 2(подставить другое число)

// for(let i = 0; i < 10; i++){

//     console.log(i , "= FOR")
// } 


let names = ["Kate", "Alex", "Ivan", "Ignat", "Andrey", "Vika"]
let item_1 = 0

// for(let item_1 in names){
//     console.log(item_1, names[item_1])
// }

for(let item_1 of names){

    if(item_1 == 'Ivan'){
        break;
    }
    console.log(item_1)
}



let items = names.length
let count = 0

while (++count < items){
    console.log(names[count])
}