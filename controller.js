function rollDice(highRoll) {
    const diceRollResult = Math.floor(Math.random * highRoll) + 1;

    return diceRollResult;
}