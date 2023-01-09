// let arr = [10, 20, 30, 50, 235, 3000]
// console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])))

// for (var i = 20; i >= 0; i--) {
//     console.log(i)
// }
var colorChoice = prompt('Выберите цвет (красный, желтый, зеленый)')
var colors = {
    red: 'красный',
    green: 'зеленый',
    yellow: 'желтый'
}
    switch (colorChoice) {
        case colors.red:
            alert('СТОП')
            break
        case colors.green:
            alert('Вход разрешен!')
            break
        case colors.yellow:
            alert('Подождите!')
            break
        default:
            alert('ВВОДИТЕ ЦВЕТ!!!!!!')
            break
    }
