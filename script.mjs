import ancientsData from "./data/ancients.mjs";
import {
    brownCards,
    blueCards,
    greenCards
} from "./data/mythicCards/index.mjs";

const anciens = document.querySelectorAll('.anciens-card');
let selectedCard

//normal, hard, easy,  используй эти уровни для id menu на которые игрок будет нажимать, чтобы выбрать уровень сложности

const chooseAncien = (currentId) => {
    selectedCard = ancientsData.find(el => el.id === currentId)

    // to show difficulty level menu
    document.querySelector('.complexity-container').style.display = 'flex';
}

anciens.forEach(el => el.addEventListener('click',(event) => chooseAncien(event.target.id)))





