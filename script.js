const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen("event.target.value")
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculation0perator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
        input0perator(event.target.value)
    })
})

const input0perator = (operator) => {
    if (calculation0perator === '') {
        prevNumber = currentNumber
    }
    calculation0perator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculation0perator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculation0perator = ''
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculation0perator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}