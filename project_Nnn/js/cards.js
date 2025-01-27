const cards = document.querySelector('.cards')


const getCard = async (text, i) =>{
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
        let data = await response.json()
        console.log(data)

        text.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `
    }catch(error){
        console.log('error')
    }

}
for( let i = 1; i<101; i++){

    const card = document.createElement('div')
    const img = document.createElement('img')
    const text = document.createElement('div')
    card.append(img)
    card.append(text)
    cards.append(card)
    img.setAttribute('class', 'img')
    card.setAttribute('class', 'card')

    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAdgQlnczh4PJaBZBpOBWZ8Y-qtzvV-viBA&s'

    getCard(text, i)
}