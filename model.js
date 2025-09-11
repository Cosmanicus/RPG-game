appdiv = document.getElementById('app')

// All biomes
biomes = [
    plains
]

// #region Arrays for plains biome
plains = [plainsMonsters, plainsAnimals, plainsloot, plainsTreasures]
plainsMonsters = [slime, skeletonArcher, wolf];
plainsAnimals = [cow, sheep, pig]
plainsLoot = []
plainsTreasures = []
// #endregion


// This is the players base stats
let player = {
    health: 2,
    damage: 1,
    gold: 5
}

// #region Stats for plains monsters
let slime = {
    health: 2,
    diceRoll: 3,
    damage: 1,
    loot: [gold, slimeBall],
    experience: 3
}
let skeletonArcher = {
    health: 2,
    diceRoll: 4,
    damage: 1,
    loot: [gold, bone],
    experience: 6
}
let wolf = {
    health: 2,
    diceRoll: 2,
    damage: 2,
    loot: [bone],
    experience: 4
}
// #endregion
// #region Stats for plains animals
let cow = {
    health: 4,
    diceRoll: 2,
    damage: 0,
    loot: [leather, meat],
    experience: 1
}
let sheep = {
    health: 3,
    diceRoll: 2,
    damage: 0,
    loot: [wool, meat],
    experience: 1
}
let pig = {
    health: 2,
    diceRoll: 2,
    damage: 0,
    loot: [meat],
    experience: 1
}
// #endregion

