class Task1 {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    rollTheDice(quantityOfRolls) {
        let sumOfScores = 0;
        const array = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < quantityOfRolls; i++) {
            let randomNum = array[Math.floor(Math.random() * array.length)];
            sumOfScores += randomNum;
        }
        this.score = sumOfScores;
        return sumOfScores;
    }
}

function createPlayer(quantityOfPlayers) {
    const players = [];
    for (let i = 0; i < quantityOfPlayers; i++) {
        players.push(new Task1(`Player ${i + 1}`));
    }
    return players;

}

function playGame(quantityOfPlayers, rollsPerPlayer) {
    const players = createPlayer(quantityOfPlayers);

    players.forEach(player => {
        const result = player.rollTheDice(rollsPerPlayer);
        console.log(`${player.name} бросил кубик ${rollsPerPlayer} раз и набрал ${result} очков`);
    });
    const maxScore = Math.max(...players.map(player => player.score));
    const winners = players.filter(player => player.score === maxScore);

    if (winners.length > 1) {
        console.log("Ничья между:", winners.map(winner => winner.name).join(", "));
    } else {
        console.log(`Победитель: ${winners[0].name} с ${winners[0].score} очками!`);
    }


}
playGame(1,1)