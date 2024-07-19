// ETAPE 1
/*
Écrire la classe et les attributs qui matérialisera le plateau de jeu: 
les cases et les lettres 
Il va donc falloir trouver une structure de donnée adaptée au format du plateau où 
chaque case va devoir contenir un nombre défini de graines.

Les lettres servent à pointer une case.

Y ajouter une première fonction display: 
affichage du plateau dans la console

Une seconde fonction isEmpty: 
le plateau est-il vide ? 
(toutes les cases à zero)
*/
class AwaleBoard {
  constructor() {
    // Initialiser le plateau avec 4 graines dans chaque case
    this.board = Array(12).fill(4);
    this.labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  }

  display() {
    //console.clear();
    console.log(` ${this.labels.slice(0, 6).join("  ")}`);
    console.log(`(${this.board.slice(0, 6).join(")(")})`);
    console.log(`(${this.board.slice(6).join(")(")})`);
    console.log(` ${this.labels.slice(6).join("  ")}`);
  }

  isEmpty() {
    return this.board.every((cell) => cell === 0);
  }
  sow(index) {
    let seeds = this.board[index];
    this.board[index] = 0;
    let currentIndex = index;

    while (seeds > 0) {
      currentIndex = (currentIndex + 1) % 12;
      this.board[currentIndex]++;
      seeds--;
    }
  }

  harvest(index) {
    let seeds = this.board[index];
    this.board[index] = 0;
    let currentIndex = index;
    let harvestedSeeds = seeds;

    while (seeds > 0) {
      currentIndex = (currentIndex - 1 + 12) % 12;
      harvestedSeeds += this.board[currentIndex];
      this.board[currentIndex] = 0;
      seeds--;
    }

    return harvestedSeeds;
  }

  getNextIndex(index, direction = 1) {
    return (index + direction + 12) % 12;
  }
}

// Affichage du plateau ---------------------------------------------------------------->
const gameBoard = new AwaleBoard();
gameBoard.display();
console.log("Le plateau est-il vide ? ", gameBoard.isEmpty());

// ETAPE 2 ---------------------------------------------------------------->
/*
Écrire la classe et les attributs qui serviront à représenter le joueur. 
Ajouter une fonction d'incrément du score
*/
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  incrementScore(points) {
    this.score += points;
  }
}

// ETAPE 3 --------------------------------------------------------------------------->
/*
Voici le coeur du jeu. 
Notez bien que semer se fait dans un sens et récolter, dans l'autre. 
Ces fonctions vont donc devoir s'ajouter à la classe du plateau de jeu.

sow: 
semer les graines d'une case aux suivantes

harvest: 
récolter les graines d'une case et des précédentes 
Il est recommandé de créer une fonction qui retourne la case suivante, 
en parcourant le plateau de jeu dans un sens ou dans l'autre. 
Cette (ou ces fonctions si vous en faite deux: une pour un sens et une autre pour l'autre) 
pourra donc être appelée par les fonctions de sow/harvest.
*/

const player1 = new Player("Joueur 1");
const player2 = new Player("Joueur 2");
console.log(player1.name, player1.score);
console.log(player2.name, player2.score);

gameBoard.display();
gameBoard.sow(0);
gameBoard.display();
console.log("Harvested seeds: ", gameBoard.harvest(11));
gameBoard.display();


// ETAPE 4 ---------------------------------------------------------------->
/*
Maintenant que le plus dur est passé, créer la classe et les attributs pour matérialiser le jeu. 
Prendre en compte deux joueurs et une gestion des tours. 
Il va donc falloir anticiper :*/


class AwaleGame {
    constructor() {
        this.board = new AwaleBoard();
        this.players = [new Player('Joueur 1'), new Player('Joueur 2')];
        this.currentPlayerIndex = 0;
    }

    /*l'affichage du plateau et des scores,
        la demande de saisie et boucle de jeu.*/
    display() {
        this.board.display();
        console.log(`${this.players[0].name} : ${this.players[0].score}`);
        console.log(`${this.players[1].name} : ${this.players[1].score}`);
    }

    playTurn(cellIndex) {
        const player = this.players[this.currentPlayerIndex];
        this.board.sow(cellIndex);

        const harvestedSeeds = this.board.harvest(cellIndex);
        player.incrementScore(harvestedSeeds);

        this.display();
        /*la gestion de la fin du jeu. 
            Pour un souci de simplicité, on assumera que le jeu se termine quand le plateau est vide.*/

        // Si le joueur a récolté 5 graines, il passe son tour.
        // le jeu est terminé ?
        if (this.board.isEmpty()) {
            console.log("Le jeu est terminé!");
        } else {
            // On passe au joueur suivant
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
        }
    }
}

