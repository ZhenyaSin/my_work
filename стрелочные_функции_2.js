// let double = n => n + 2;

// console.log(double(3));


// let Саня = () => console.log("Саня пидар")

// Саня()











// function yolochka1(item_1, item_2){

//     let mass = "Hello!!!!!!"
//     console.log(mass, item_1, item_2)
//     console.log(mass, item_1 + item_2)
// }

// yolochka1(11, 22)




// function f1(){
//     console.log("Hello!!!!!!")
// }



// => - означает function
// ? - что делать?
// : - или

// let t1 = 10
// let t2 = 20

// let t3 = 30
// let t4 = 40



// // let f11 = () => console.log("Hello!!!!!!asdasdasd")
// // let f22 = (t11, t22) => {console.log("sum = ", t11 + t22)}


let f33 = (t1 > t2) ? // ? означает что нам делать дальше? Есть 2 варианта
    (tt1, tt2) => console.log('order = ', tt1 + tt2) : // Если true - выдавай этот вариант
    (tt1, tt2) => console.log('order = ', tt1 - tt2)  // Если false - выдавай этот



// // f11()
// // f22(t1, t2)
// // f33(t3, t4)



// let t1 = 10
// let t2 = 20

// let t3 = 30
// let t4 = 40

// function f55(tt1, tt2){
//     if (t1 < t2){
//         console.log('order = ', tt1 + tt2)
//     }else{
//         console.log('order = ', tt1 - tt2)
//     }
// }

// f55(t3, t4)




function tolochka33(){};

tolochka33.prototype.fast() = function (){
    console.log('FAST !!')
}

tolochka33.prototype.green = function (sun, co2){
    console.log("Green ==", sun, " + ", co2)
}

tolochka33.prototype.shishki = function(){
    console.log("shishki == Yolki")
}

let forest = new tolochka33()

forest.fast()
forest.green(4500, 50)
forest.shishki()