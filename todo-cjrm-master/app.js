const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', e => {
  e.preventDefault()
  const inputValue = e.target.add.value.trim()
  if (inputValue.length) {
    todosContainer.innerHTML +=
      `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
  e.target.reset() 
  }
})

todosContainer.addEventListener(`click`, e => {
  const clickedElement = e.target
  if(Array.from(clickedElement.classList).includes('delete')){
    clickedElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', e => {
  const inputValue =e.target.value.trim().toLowerCase()
   Array.from(todosContainer.children)
   .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
   .forEach(todo => {
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
   })
   Array.from(todosContainer.children)
   .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
   .forEach(todo => {
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
   })
})