const color = prompt('Введите цвет \nКрасный, \nЖелтый, \nЗеленый :').trim().toLowerCase()
const Red = document.getElementsByClassName('red')
const Yellow = document.getElementsByClassName('yellow')
const Green = document.getElementsByClassName('green')


switch (color) {
    case 'красный':
    case 'red':
        Red[0].style.background = 'red'
        Red[0].innerHTML = 'Stop'
        break;
    case 'желтый':
    case 'yellow':
        Yellow[0].style.background = 'yellow'
        Yellow[0].innerHTML = 'Wait'
        break;
    case 'зеленый':
    case 'green':
        Green[0].style.background = 'green'
        Green[0].innerHTML = 'GO'
        break;
    default:
        Red[0].style.background = 'red'
        Yellow[0].style.background = 'yellow'
        Green[0].style.background = 'green'
        Red[0].innerHTML = "error!"
        Yellow[0].innerHTML = "error!"
        Green[0].innerHTML = "error!"
}