function refreshPage() {
    location.reload();
}
const grid = document.querySelector(".grid")

const characters = [
    '1',
    '2',
    '3',
    '4',
    '5'];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className
    return element;
}

let firstCard = '';
let secondCard = '';



const CheckEndGame = () => {
const disabledCards = document.querySelectorAll(".disables-card")
    console.log(disabledCards)

    if(disabledCards.length === 10){
        console.log(disabledCards)
        alert("Parabéns, voce conseguiu!!")
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disables-card')
        secondCard.firstChild.classList.add('disables-card')
        firstCard = '';
        secondCard = '';

        CheckEndGame()
    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
            firstCard = '';
            secondCard = '';

        }, 500)
    }
}


const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return
    }
    if (firstCard == "") {
        target.parentNode.classList.add("reveal-card")
        target.parentNode.classList.add("reveal-card")
        firstCard = target.parentNode;
    } else if (secondCard == "") {
        target.parentNode.classList.add("reveal-card")
        secondCard = target.parentNode;

        checkCards()

    }
}
const createCard = (character) => {
    const card = createElement("div", "card")
    const front = createElement("div", "face front")
    const back = createElement("div", "face back")

    front.style.backgroundImage = `url('../images/${character}.jpeg')`


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)
    return card

}
const loadGame = () => {

    const diplicateCharatesrs = [...characters, ...characters]


    const shuffleArray = diplicateCharatesrs.sort(() => Math.random() - 0.5)

    shuffleArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card)
    });
}
loadGame()