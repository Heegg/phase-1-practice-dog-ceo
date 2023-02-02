
let breeds = []

function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(res => res.json())
    .then(res => {
        // console.log("res", res.message)
        const dogImageContainer = document.getElementById("dog-image-container")
        res.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })
    })
}

// map returns an array and forEach doesn't
function getBreedNames(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(res => {
        breeds = Object.keys(res.message)
        addBreedNamesToDom(breeds)
    })
}

function addBreedNamesToDom(breeds){
    const ul = document.querySelector("#dog-breeds")
    breeds.map(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        ul.append(li)
    })
}

document.addEventListener("click", e => {
    if (e.target.matches("li")){
        e.target.style.color = "red"
    }
})

document.addEventListener("change", e => {
    if (e.target.matches("breed-dropdown")){
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter[breed => breed[0] === e.target.value]
        addBreedNamesToDom(filteredBreeds)
    }
})

getBreeds() 
getBreedNames()
