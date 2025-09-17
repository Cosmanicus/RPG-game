const appdiv = document.getElementById('app');
let rndIndex = null;

// This is the players base stats
let player = {
    name: "Player",
    health: 2,
    damage: 1,
    gold: 5,
    inventory: []
}

// #region Stats for mobs
let slime = {
    name: "Slime",
    health: 2,
    diceRoll: 3,
    damage: 1,
    loot: [],
    experience: 3
}
let skeletonArcher = {
    name: "Skeleton Archer",
    health: 2,
    diceRoll: 4,
    damage: 1,
    loot: [],
    experience: 6
}
let wolf = {
    name: "Wolf",
    health: 2,
    diceRoll: 2,
    damage: 2,
    loot: [],
    experience: 4
}
let cow = {
    name: "Cow",
    health: 4,
    diceRoll: 2,
    damage: 0,
    loot: [],
    experience: 1
}
let sheep = {
    name: "Sheep",
    health: 3,
    diceRoll: 2,
    damage: 0,
    loot: [],
    experience: 1
}
let pig = {
    name: "Pig",
    health: 2,
    diceRoll: 2,
    damage: 0,
    loot: [],
    experience: 1
}
// #endregion

// #region Arrays for what can spawn
const mobs = [slime, skeletonArcher, wolf, cow, sheep, pig];
const loot = [];
const treasures = [];
// #endregion
