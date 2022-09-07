

// for (let i = 0; i < 10; i++){

//     console.log(i , "= FOR")
// }

// for (let temperature = 0; temperature < 10; temperature =+ 2){

//     if (temperature < 3){
//         console.log("temperature = ", temperature, "cold")
//     } else if (temperature >= 3 && temperature < 7){
//         console.log("temperature = ", temperature, "good")
//     }else {
//         console.log("temperature = ", temperature, "Kares")
//     }
// }





// let names = ['Kate',
//              'Alex',
//              'Ivan',
//              'Ignat',
//              'Andrey',
//              'Vika']

// for (let item_1 in names){
//     console.log(item_1, names[item_1])
// }

// let names = ['Kate',
//              'Alex',
//              'Ivan',
//              'Ignat',
//              'Andrey',
//              'Vika']

// for (let item_1 of names){
//     console.log(item_1)
// }



let names = ['Kate',
             'Alex',
             'Ivan',
             'Ignat',
             'Andrey',
             'Vika']

// for (let item_1 of names){

//     if (item_1 == 'Ignat'){
//         break;
//     }
//     console.log(item_1)
// }



let items = names.length
let count = -1
console.log(items)

while (count < items){
    console.log(names[count])
    // count++
}