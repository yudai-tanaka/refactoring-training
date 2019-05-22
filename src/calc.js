const btn0 = document.getElementById('js-calc-0')
const btn1 = document.getElementById('js-calc-1')
const btn2 = document.getElementById('js-calc-2')
const btn3 = document.getElementById('js-calc-3')
const btn4 = document.getElementById('js-calc-4')
const btn5 = document.getElementById('js-calc-5')
const btn6 = document.getElementById('js-calc-6')
const btn7 = document.getElementById('js-calc-7')
const btn8 = document.getElementById('js-calc-8')
const btn9 = document.getElementById('js-calc-9')

const result = document.getElementById('js-calc-result')
const clear = document.getElementById('js-calc-clear')
const divided = document.getElementById('js-calc-divided')
const multiplied = document.getElementById('js-calc-multiplied')
const minus = document.getElementById('js-calc-minus')
const equal = document.getElementById('js-calc-equal')
const plus = document.getElementById('js-calc-plus')

var value = 0
var waiting = false
var isCalc = false
var type = ''
var tempValue = 0

function setResult(val) {
  if (!waiting) {
    value = parseFloat(value + val)
  } else {
    value = parseFloat(val)
  }
  result.innerHTML = String(parseFloat(value, 10))
  waiting = false
}
function setType(_type, value) {

  type = _type
  waiting = true
  if (isCalc) {
    tempValue = calc()
  } else {
    tempValue = value
  }
  console.log(_type, value);
  isCalc = true
}
function calc() {
  var resultValue = 0
  switch(type) {
    case 'plus':
      resultValue = tempValue + value
      break;
    case 'minus':
      resultValue = tempValue - value
      break;
    case 'multi':
      resultValue = tempValue * value
      break;
    case 'div':
      resultValue = tempValue / value
      break;
    default:
      resultValue = tempValue
      break;
  }
  result.innerHTML = String(resultValue)
  return resultValue
}

clear.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clear')
  value = 0
  type = ''
  waiting = false
  setResult(value)
})
btn0.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(0)
  setResult('0')
})
btn1.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(1)
  setResult('1')
})
btn2.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(2)
  setResult('2')
})
btn3.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(3)
  setResult('3')
})
btn4.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(4)
  setResult('4')
})
btn5.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(5)
  setResult('5')
})
btn6.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(6)
  setResult('6')
})
btn7.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(7)
  setResult('7')
})
btn8.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(8)
  setResult('8')
})
btn9.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(9)
  setResult('9')
})

divided.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('divided')
  setType('div', value)
})
multiplied.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('multiplied')
  setType('multi', value)
})
minus.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('minus')
  setType('minus', value)
})
plus.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('plus')
  setType('plus', value)
})

equal.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('equal')
  calc()
  isCalc = false
  waiting = true
})
