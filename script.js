const previousOperand = document.querySelector('.previous-operand')
const currentOperand = document.querySelector('.current-operand')
const buttons = document.querySelectorAll('button')
// console.log(buttons)
// console.log(previousOperand)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'AC'){
    currentOperand.textContent = ''
        } else
        currentOperand.textContent =+ button.textContent
    })
})
