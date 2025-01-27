const img = document.querySelectorAll(".img")
const name = document.querySelectorAll("h2")
const age = document.querySelectorAll("span")

const request = new XMLHttpRequest()
request.open("GET", '../data/characters.json')
request.setRequestHeader("Content-type", "application/json")
request.send()


request.onload =() =>{
    const data = JSON.parse(request.response)
    data.forEach((element, index) => {
        console.log()
        img[index].style.backgroundImage = element.person_photo
        name[index+1].innerHTML = element.name
        age[index].innerHTML = element.age
    })
}

const requestAny = new XMLHttpRequest()
requestAny.open("GET", '../data/any.json')
requestAny.setRequestHeader("Content-type", "application/json")
requestAny.send()
requestAny.onload = () =>{
    console.log(requestAny.response)
}