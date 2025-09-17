function rollDice(highRoll) {
    const diceRollResult = Math.floor(Math.random * highRoll) + 1;
    return diceRollResult;
}

// Used to damage or heal player
function playerDamageOrHeal(damageValue) {
    player.health -= damageValue
}

// Used to damage or heal mob
function mobDamageOrHeal(damageValue) {
    mobs[rndIndex].health -= damageValue
}


function combatRoll(highRoll, playerDamage, mobDamage) {
    let result = rollDice(highRoll);

    if (result < mobs[rndIndex].diceRoll) {
        playerDamageOrHeal(mobDamage);
    }
    else if (result >= mobs[rndIndex].diceRoll) {
        mobDamageOrHeal(playerDamage);
    }   
    updateView();
}

function generateRandomAnimal() {
    rndIndex = Math.floor(Math.random() * mobs.length);
}