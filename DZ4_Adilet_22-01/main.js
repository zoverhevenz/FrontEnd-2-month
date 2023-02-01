const plus = document.querySelector('#increment')
const  minus = document.querySelector('#decrement')
const  reset = document.querySelector('#reset')
const  num = document.querySelector('.number')


let number = 0

plus.onclick = () => {
    number ++
    num.innerText = number
    num.style.color = "green"
}

minus.onclick = () => {
    number --
    if (number < 1 ){
        number = 0
    }
    num.innerText = number
    num.style.color = "red"
}

reset.onclick = () => {
    number = 0
    num.innerText = number
    num.style.color = "gray"
}
