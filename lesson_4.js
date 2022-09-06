// // ()  - какие входные данные принимает функция

// function Yolochka1(item_1, item_2){
//     let mass = "Hello!!"
//     console.log("Hello!!123")

// }

// Yolochka1(11, 22)



// // стрелочные функции


// let t1 = 10
// let t2 = 20
// let t3 = 30
// let t4 = 40



// let f11 = () => console.log("Hello!!123213123")
// let f22 = (t11, t22) => {console.log('Sum = ', t11 + t22)}


// let f33 = (t1 < t2 || t3 > t4) ? // ? - че делать(грубо говоря работает как if)
//     (tt1, tt2) => console.log("order = ", tt1 + tt2) : // узнать что означет этот символ
//     (tt1, tt2) => console.log("order = ", tt1 - tt2) ; // узнать что означет этот символ


// f33(t3, t4)

// // function f1(){
// //     console.log("Hellooooooo1111")
// // }



// f33(30, 40)
// function f55(tt1, tt2){
//     if (t1 < t2) {
//         console.log("order = ", tt1 + tt2) 
//     }else{
//         console.log("order = ", tt1 - tt2) 
//     }
// }





function Yolochka33(){};

Yolochka33.prototype.fast = function (){
    console.log('FAST !!')
}

Yolochka33.prototype.green = function (sun, co2){
    console.log("Green !!", sun, " + ", co2)
}

Yolochka33.prototype.shishki = function (){
    console.log("shishki == Yolki")
}

let forest = new Yolochka33()


forest.fast()
forest.green(4500, 50)
forest.shishki()