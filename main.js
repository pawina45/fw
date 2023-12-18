const counter = document.querySelector('.counter')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const btnClr = document.querySelector('.btn-clr')
const number = document.querySelector('.number')

let countNum = 0

function updeteCounter(n) {
    if(countNum + n < 0) {
        return
    }
    countNum += n
    number.textContent = countNum
}

btnInc.addEventListener('click', () => updeteCounter(1))
btnDec.addEventListener('click', () => updeteCounter(-1))
btnClr.addEventListener('click', () => updeteCounter(-countNum))