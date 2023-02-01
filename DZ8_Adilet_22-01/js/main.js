const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = 'img/ground.png'

const foodImg = new Image()
foodImg.src = 'img/food.png'

const pizzaImg = new Image()
pizzaImg.src = 'img/pizza_food.png'

const friesImg = new Image()
friesImg.src = 'img/fries_food.png'

let box = 32
let score = 0

let food = {
    x: Math.floor( (Math.random() * 17 + 1)) * box ,
    y: Math.floor( (Math.random() * 15 + 3)) * box ,
}
let pizza = {
    x: Math.floor( (Math.random() * 17 + 1)) * box ,
    y: Math.floor( (Math.random() * 15 + 3)) * box ,
}
let fries = {
    x: Math.floor( (Math.random() * 17 + 1)) * box ,
    y: Math.floor( (Math.random() * 15 + 3)) * box ,
}
let snake = []
snake[0] = {
    x: 9 * box,
    y: 10 * box,
}


let dir

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37 && dir !== 'right') dir = 'left'
    else if (event.keyCode === 38 && dir !== 'down') dir = 'up'
    else if (event.keyCode === 39 && dir !== 'left') dir = 'right'
    else if (event.keyCode === 40 && dir !== 'up') dir = 'down'
})

function setModal() {
    const div = document.createElement('div')
    const div_block = document.createElement('div')
    const h2 = document.createElement('h2')
    const btn = document.createElement('button')
    const x = document.createElement('button')

    div.setAttribute('class', 'modal')
    h2.setAttribute('class', 'txt')
    x.setAttribute('class', 'xbtn')
    div_block.setAttribute('class', 'div_block')
    btn.setAttribute('class', 'restart')

    h2.innerText = `You have ${score}`
    btn.innerText = 'Restart'
    x.innerText = 'x'
    div.append(div_block)
    div_block.append(h2, btn, x)

    btn.onclick = () => window.location.reload()
    x.onclick = () => div.remove()

    document.body.append(div)
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x === arr[i].x && head.y === arr[i].y) {
            clearInterval(game)
            setModal()
        }
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(foodImg, food.x, food.y)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'darkgreen' : 'green'
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }

    ctx.fillStyle = 'white'
    ctx.font = '50px Arial'
    ctx.fillText(score, box * 2.5, box * 1.7)

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (snakeX === food.x && snakeY === food.y) {
        score++
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        }
        pizza = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        }
        fries = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        }
    } else snake.pop()

    if (snakeX < box || snakeX > box * 17 || snakeY < box * 3 || snakeY > box * 17) {
        clearInterval(game)
        setModal()
    }


    if (dir === 'left') snakeX -= box
    if (dir === 'right') snakeX += box
    if (dir === 'up') snakeY -= box
    if (dir === 'down') snakeY += box

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    eatTail(newHead, snake)

    snake.unshift(newHead)
}

let game = setInterval(drawGame, 100)



