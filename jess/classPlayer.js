// class Player pour afficher le plateau de jeu

class Player {
  constructor(nom) {
    this.nom = nom;
    this.score = 0;
  }

  setScore() {
    return (this.score += 1);
  }
}

const player1 = new Player("Jess");
const player2 = new Player("Iléana");

console.log(player1);
console.log(player1.setScore());
console.log(player1);
console.log(player1.setScore());
console.log(player1);
