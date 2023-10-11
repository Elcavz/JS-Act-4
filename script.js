const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const add = document.getElementById('add')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const result = document.getElementById('result')
const equal = document.getElementById('equal')


add.onclick = function() {
    const inp1 = parseInt(input1.value)
    const inp2 = parseInt(input2.value)
    let addResult = inp1 + inp2
    equal.style.opacity = '100%'
    result.innerHTML = addResult
}

minus.onclick = function() {
    const inp1 = parseInt(input1.value)
    const inp2 = parseInt(input2.value)
    let minusResult = inp1 - inp2
    equal.style.opacity = '100%'
    result.innerHTML = minusResult
}

multiply.onclick = function() {
    const inp1 = parseInt(input1.value)
    const inp2 = parseInt(input2.value)
    let multiplyResult = inp1 * inp2
    equal.style.opacity = '100%'
    result.innerHTML = multiplyResult
}

divide.onclick = function() {
    const inp1 = parseInt(input1.value)
    const inp2 = parseInt(input2.value)
    let divideResult = inp1 / inp2
    equal.style.opacity = '100%'
    result.innerHTML = divideResult
}