abstract class Hero {
    private codenome:string;
    private identidadeSecreta:string;

    constructor() {}

    getCodenome():string {
        return this.codenome;
    }

    setCodenome(codenome:string):void {
        this.codenome = codenome;
    }

    getIdentidadeSecreta():string {
        return this.identidadeSecreta;
    }

    setIdentidadeSecreta(identidadeSecreta:string):void {
        this.identidadeSecreta = identidadeSecreta;
    }
}

interface Habilidades {
    superPoder?:string
    pericia?:string
    poder:number

    getFraqueza():string;
}

export {Hero, Habilidades}