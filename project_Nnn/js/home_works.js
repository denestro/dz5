// EMAIL CHECKER
const emailField = document.querySelector('#gmail_input'),
    checkedBtn = document.querySelector('#gmail_button'),
    resultsBtn = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._]+@gmail\.com$/

const checkEmail = () => {
    if (regExp.test(emailField.value)) {
        resultsBtn.innerHTML = "ok"
        resultsBtn.style.color = "green"
    }else {
        resultsBtn.style.color = "red"
        resultsBtn.innerHTML = "error"
    }
}

const handleKeyPress = (e) => {
    if (e.key === 'Enter') checkEmail()
}

checkedBtn.onclick = checkEmail;
document.addEventListener('keydown', handleKeyPress);



// MOVE BLOCK

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const offWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < offWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)
    } else if (positionX >= offWidth && positionY < offHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 5)
    } else if (positionX > 0 && positionY >= 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 5)
    } else if (positionX === 0 && positionY >= 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 5)
    }
}

moveBlock();



//todo STOP WATCH

const startBtn = document.querySelector('#start')
const stoptBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')
let timeBlock = document.querySelector('#seconds')
let count = 0

let timer

startBtn.onclick = () => {
    if(!timer) {
        timer = setInterval(() => {
            count++
            timeBlock.innerHTML = count
        }, 1000)
    }
}

stoptBtn.onclick = () =>{
    clearInterval(timer)
    console.log()
}

resetBtn.onclick = () =>{
    clearInterval(timer)
    count = 0
    timeBlock.innerHTML = count
}
