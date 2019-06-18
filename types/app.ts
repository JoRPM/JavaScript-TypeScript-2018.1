
// superclass - classe generica

import {Hero, Habilidades} from './hero-base';

// subclass - classe especialista
class Batman extends Hero implements Habilidades {
    superPoder?: string;
    pericia?: string;
    poder: number;
    

    
constructor() {
        super()
    }
    getFraqueza():string {
        return `sua fraqueza é o Coringa!`
    }

    getArqueRival():string {
        return `Coringa`
    }

    getPericia():string {
        return `suas pericia(s) é(são) ${this.pericia}`
    }

    setPericia(pericia:string):void {
        this.pericia = pericia;
    }

    getSuperPoder():string {
        return `O(s) superpoder(s) do ${this.getCodenome()} é(são) ${this.superPoder}`
    }

    setSuperPoder(superPoder:string):void {
        this.superPoder = superPoder;
    }

    getPoder():string {
        return `O nivel de poder do ${this.getCodenome()} é ${this.poder}`
    }

    setPoder(poder:number):void {
      this.poder = poder; 
    }
}

// interface - modelo, padrão


let homemMorcego = new Batman();
homemMorcego.setCodenome('Batman');
homemMorcego.setIdentidadeSecreta('Bruce Wayne');
homemMorcego.setPericia('Artes Marcias, Estrategia');
homemMorcego.setPoder(20);
homemMorcego.setSuperPoder('dinheiro');

console.log(`o codenome do heroi é: ${homemMorcego.getCodenome()} e sua identidade secreta é: ${homemMorcego.getIdentidadeSecreta()}, ${homemMorcego.getPericia()}, ${homemMorcego.getSuperPoder()},${homemMorcego.getPoder()}, seu arqueRival é ${homemMorcego.getArqueRival()}, ${homemMorcego.getFraqueza()} `);


