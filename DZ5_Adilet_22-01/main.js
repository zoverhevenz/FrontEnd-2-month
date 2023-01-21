const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    }
    else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        const divButtons = document.createElement('div')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        editBtn.setAttribute('class', 'edit_button')
        deleteBtn.setAttribute('class', 'delete_button')
        divButtons.setAttribute('class', 'buttons_div')

        text.innerText = input.value.trim()
        deleteBtn.innerText = 'delete'
        editBtn.innerText = 'edit'

        deleteBtn.onclick = () => {div.remove()}
        editBtn.onclick = () => {
            let editText = prompt(`Edit: ${text.innerText}`).trim()
            if (editText === '') {
                text.innerText
            } else {
                text.innerText = editText
            }

        }

        divButtons.append(deleteBtn)
        divButtons.append(editBtn)
        div.append(text)
        div.append(divButtons)
        todoList.prepend(div)

    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)