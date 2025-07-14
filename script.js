let spanCitation = document.querySelector("span")
let btnGenererCitation = document.querySelector("button")



function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getRandomCitation() {
    let index = getRandomInt(listeCitations.length)
    return listeCitations[index]
}

btnGenererCitation.addEventListener("click", () => {
    spanCitation.innerText = getRandomCitation()
})