// const returnMin = (num1, num2) => {
//     if (num1 < num2)
//         alert(num1)
//     else alert(num2)
// }
// returnMin(100, 1200)

// const promtMess = prompt('Введите что либо')
// const returnLenth = (chtoto) => {
//     return alert(chtoto.length)
// }
// returnLenth(promtMess)
let numA = Number(prompt('Введите число'))
let symbol = prompt('Введите (+ - / *)')
let numB = Number(prompt('Введите второе число'))

const calc = (a, b, c) => {
    if (a * c) {
        alert(a * c)
    } else if (a / c) {
        alert(a / c)
    } else if (a - c) {
        alert(a - c)
    } else if (a + c) {
        alert(a + c)
    } else {
        alert('Вводи числа')
    }
}
calc(numA, symbol, numB)