let gameView = /*HTML*/
`<div id="gameRender">`;
gameView += /*HTML*/
`<div id="mobStats">`

generateRandomAnimal();

updateView();
function updateView() {
    appdiv.innerHTML = /*HTML*/
    `
    ${printAnimal()}
    ${printPlayer()}
    `
}

function printAnimal() {
    let html = /*HTML*/
    `
    <div>${mobs[rndIndex].name} health: ${mobs[rndIndex].health}</div>
    <div>${mobs[rndIndex].name} dice roll: ${mobs[rndIndex].diceRoll}</div>
    <div>${mobs[rndIndex].name} damage ${mobs[rndIndex].damage}</div>
    `
    return html;
}

function printPlayer() {
    let html = /*HTML*/
    `
    <div>player health: ${player.health}</div>
    <button onclick="combatRoll(6, player.damage, mobs[rndIndex].damage)">click to roll</button>
    <div>player damage: ${player.damage}</div>
    `
    return html;
}

