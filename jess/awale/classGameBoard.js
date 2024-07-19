// class gameBoard pour afficher le plateau de jeu

class GameBoard {
  constructor(cases) {
    this.cases = cases;
  }

  generateBoard() {
    const arrayBoard = [];
    const arrayCases = this.cases.split(" ");
    let arrayLigne2 = [];
    let arrayLigne3 = [];

    for (let i = 0; i < 6; i++) {
      arrayLigne2.push(parseInt(arrayCases[i]));
    }

    for (let i = 6; i < 12; i++) {
      arrayLigne3.push(parseInt(arrayCases[i]));
    }

    arrayBoard.push(arrayLigne2, arrayLigne3);
    return arrayBoard;
  }

  displayBoard() {
    const display = this.generateBoard();

    console.log(" A   B   C   D   E   F");
    console.log(
      "(" +
        display[0][0] +
        ") " +
        "(" +
        display[0][1] +
        ") " +
        "(" +
        display[0][2] +
        ") " +
        "(" +
        display[0][3] +
        ") " +
        "(" +
        display[0][4] +
        ") " +
        "(" +
        display[0][5] +
        ") "
    );
    console.log(
      "(" +
        display[1][0] +
        ") " +
        "(" +
        display[1][1] +
        ") " +
        "(" +
        display[1][2] +
        ") " +
        "(" +
        display[1][3] +
        ") " +
        "(" +
        display[1][4] +
        ") " +
        "(" +
        display[1][5] +
        ") "
    );
    console.log(" G   H   I   J   K   L");
  }

  isEmptyBoard() {
    let sumArray1 = this.generateBoard()[0].reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    let sumArray2 = this.generateBoard()[1].reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return (sumArray1 === 0) & (sumArray2 === 0) ? true : false;
  }

  //saw: semer les graines d'une case aux suivantes dans le sens inverse des aiguilles d'une montre

  saw(graines) {}
}

const gameBoard = new GameBoard("4 4 4 4 4 4 4 4 4 4 4 4");
gameBoard.displayBoard();
console.log(gameBoard.isEmptyBoard());
