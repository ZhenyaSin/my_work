// let i = 1
// let result = 1
// while (i < 11){
//     result = result *2
//     i++
// }
// console.log(result)




function isPalindrom3(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}

    console.log(`${isPalindrom3('Abba') ? 'it is a palindrome' : 'It is not a palindrome'}`)