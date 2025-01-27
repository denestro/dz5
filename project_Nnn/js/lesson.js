//todo  PHONE BLOCK

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/   //maska

phoneButton.onclick = ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'Invalid Phone Number'
        phoneResult.style.color = 'red'
    }
}


//todo TAB SLIDER

const blocks = document.querySelectorAll('.tab_content_block')
const items = document.querySelectorAll('.tab_content_item')
const itemsParent = document.querySelector('.tab_content_items')

const hideContent = () =>{
    blocks.forEach((block) => {
        block.style.display = 'none'
    })
    items.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showContent = (index = 0) =>{
    blocks[index].style.display = 'block'
    items[index].classList.add('tab_content_item_active')
}
hideContent()
showContent()

let count = 0
let intervals = setInterval(() => {
    hideContent()
    showContent(count++)

    if( count === items.length ){
        count=0
    }
},3000)

itemsParent.onclick = (event)=>{
    if(event.target.classList.contains('tab_content_item')){
        items.forEach( (item, index) => {
            if(event.target === item){
                hideContent()
                showContent(index)
                count = index
            }
        })
    }
}



// todo  CONVERTER

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');


const converter = (element, targetElement1, targetElement2) => {
    element.oninput =() => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (targetElement1.id ==="som" && targetElement2.id ==="eur") {
                targetElement1.value = (element.value*data.usd).toFixed(2);
                targetElement2.value = (targetElement1.value/data.eur).toFixed(2);
            }
            if (targetElement1.id ==="usd" && targetElement2.id === "eur") {
                targetElement1.value = (element.value/data.usd).toFixed(2);
                targetElement2.value = (element.value/data.eur).toFixed(2);
            }
            if(targetElement1.id ==="usd" && targetElement2.id === "som") {
                targetElement2.value = (element.value * data.eur).toFixed(2);
                targetElement1.value = (targetElement2.value / data.usd).toFixed(2);
            }
            if (element.value === "") {
                targetElement1.value ="";
                targetElement2.value ="";
            }
        }
    }
}
converter(usdInput, somInput, eurInput);
converter(somInput, usdInput, eurInput);
converter(eurInput, usdInput, somInput);






// Card Switcher

const down = document.querySelector('#btn-prev')
const go = document.querySelector("#btn-next")
const card = document.querySelector(".card")

let cardNum = 1

const getCard = async () =>{
    try{
        let response = await fetch(`ttps://jsonplaceholder.typicode.com/todos/${cardNum}`)
        let data = response.json()
        card.innerHTML = `
        <h3>${data.title}</h3>
        <h4>${data.completed}</h4>
    `
    }catch(error){
        console.log('i am error in function getCard')
    }

}
getCard()

go.onclick = () =>{
    cardNum++
    if(cardNum === 201 ){
        cardNum = 1
    }
    getCard()
}

down.onclick = () =>{
    cardNum--
    if(cardNum === 0){
        cardNum=200
    }
    getCard()
}


// dz 6.2

const goData = async () =>{
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log('error')
    }

}
goData()






