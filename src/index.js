// Lista de heróis (usando laço de repetição)
let heroes = [
    { nickname: "kaka", xp: 500 },
    { nickname: "dai", xp: 1500 },
    { nickname: "lira", xp: 3500 },
    { nickname: "Mira", xp: 6500 },
    { nickname: "mario", xp: 8200 },
    { nickname: "Zeldris", xp: 9500 },
    { nickname: "Asta", xp: 12000 }
];

// Laço para percorrer todos os heróis
for (let i = 0; i < heroes.length; i++) {

    let nickname = heroes[i].nickname;
    let xp = heroes[i].xp;
    let level = "";

    // Estrutura de decisão
    if (xp < 1000) {
        level = "Iron";
    } else if (xp >= 1001 && xp <= 2000) {
        level = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        level = "Silver";
    } else if (xp >= 5001 && xp <= 7000) {
        level = "Gold";
    } else if (xp >= 7001 && xp <= 8000) {
        level = "Platinum";
    } else if (xp >= 8001 && xp <= 9000) {
        level = "Ascending";
    } else if (xp >= 9001 && xp <= 10000) {
        level = "Immortal";
    } else {
        level = "Radiant";
    }

    // Saída
    console.log("The Hero of the Name " + nickname + " is at the level " + level);
}
