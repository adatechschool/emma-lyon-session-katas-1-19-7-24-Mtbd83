class Plateau {


    constructor(square){
        this.square = square
        let tab = []
        for(let i = 0; i < 12; i++){
            square = 4
            tab.push(square)
        }
        this.tab = tab
        
    }

    display(){
        console.log(' A'+'  B'+'  C'+'  E'+'  F')
        console.log("("+ this.tab[0] +")"+"("+ this.tab[1]+")"+"("+ this.tab[2] +")"+"("+this.tab[3]  +")"+"("+this.tab[4] +")"+"("+this.tab[5]+")")
        console.log("("+ this.tab[6] +")"+"("+ this.tab[7]+")"+"("+ this.tab[8] +")"+"("+this.tab[9]  +")"+"("+this.tab[10] +")"+"("+this.tab[11]+")")
        console.log(' G'+'  H'+'  I'+'  J'+'  K'+'  L')
        
    }

    isEmpty(){
        for(let i = 0; i < this.tab.length; i ++){
            if(this.tab[i] != 0){
                return false
            }
        }
        return true
    }

    saw(i){
        let graines = this.tab[i]
        this.tab[i] = 0
        while(graines > 0){
            i += 1
            this.tab[i] += 1
            graines --
        }
        return graines
    }

    harvest(){
        
        if(graines == 2 || graines == 3){
            this.tab[i] = 0
            i --
            while(this.tab[i] == 2 || this.tab[i]== 3){
                this.tab[i] = 0
                i --
            }
        }
    }
}

const plateau = new Plateau()
console.log(plateau.isEmpty())


class Joueur {
    constructor(name){
        this.name = name
        this.score = 0
    }

    IncrementeScore(point){
        this.score += point
        return this.score
    }
}

let joueur1 = new Joueur("Toto")
console.log(joueur1.IncrementeScore())













