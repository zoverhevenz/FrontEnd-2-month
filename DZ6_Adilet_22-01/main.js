const input = document.getElementById('reverseWord')
const list = document.getElementById('list')

const reverseWord = () => {
    let arr = []
    arr.push(input.value)
    arr.forEach(word => {
        const text = document.createElement('p')
        text.append(word.split('').reverse().join(''))
        list.append(text)
    })
}
input.onkeydown = e => {e.keyCode === 13 ? reverseWord() : false}
