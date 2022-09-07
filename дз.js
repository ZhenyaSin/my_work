let item_1 = 5
let item_2 = 3
let item_3 = item_1 + item_2
let item_4 = "Yolochka"
let item_5 = item_3
let item_6 = 15
let item_6_type = Number(item_6)
let item_7 = String(item_6)
let item_7_type = String(item_7)
age_1 = 19
age_2 = 18
age_3 = 60



// console.log(item_3)
// console.log(item_4)
// console.log(item_3 + item_4)
// console.log(item_3 * item_4)
// console.log("item_6 == ", item_6, "item_6_type ——", typeof item_6)
// console.log("item_7 == ", item_7, "item_7_type ——", typeof item_7)


// if (age_1 < age_2){
//     console.log("You don’t have access cause your age is ")
// }
// else if (age_1 >= age_2 && age_1 < age_3){
//     console.log("Welcome")
// }
// else if (age_1 > age_3){
//     console.log("Keep calm ande look Culture channel")
// }
// else {
//     console.log("Techical work")
// }


// const checkAge = function(age) {
//     if (age_1 < age_2){
//         console.log("You don’t have access cause your age is " + age + 'its less then' + age_2)
//     }
//     else if (age_1 >= age_2 && age_1 < age_3){
//         console.log("Welcome")
//     }
//     else if (age_1 > age_3){
//         console.log("Keep calm ande look Culture channel")
//     }
//     else {
//         console.log("Techical work")
//     }
// }


// checkAge(17)
// checkAge(18)


// const checkAge = function(age) {
//     if (age_1 < age_2){
//         console.log("You don’t have access cause your age is " + age + 'its less then' + age_2)
//     }
//     else if (age_1 >= age_2 && age_1 < age_3){
//         console.log("Welcome")
//     }
//     else if (age_1 > age_3){
//         console.log("Keep calm ande look Culture channel")
//     }
//     else {
//         console.log("Techical work")
//     }
// }


// checkAge(17)
// checkAge(18)



// const checkAge = function(age) {
//     if (typeof age == "number"){
//     if (age_1 < age_2){
//         console.log("You don’t have access cause your age is " + age + 'its less then' + age_2)
//     }
//     else if (age_1 >= age_2 && age_1 < age_3){
//         console.log("Welcome")
//     }
//     else if (age_1 > age_3){
//         console.log("Keep calm ande look Culture channel")
//     }
//     else {
//         console.log("Techical work")
//     }
// } else { console.log("Not integer value")}
// }

// checkAge(17)
// checkAge("jkahsdjkhaskd")



const checkAge = function(age) {

    age = Number(age) // данной командой мы просто перевели age строку в number

    // if (!isNaN(age)) {
        // if (Number(age)) {
            if (+age) {
    if (age < age_2){
        console.log("You don’t have access cause your age is " + age + 'its less then' + age_2)
    } else if(age >= age_2 && age < age_3){
        console.log("Welcome")
    } else if(age > age_3){
        console.log("Keep calm ande look Culture channel")
    } else {
        console.log("Techical work")
    }
} else { console.log("Not integer value")}
}

checkAge(22)
checkAge("22")
checkAge("22aaa")

let agePrompt = prompt("Enter age")
checkAge(agePrompt)