// funções simples
function exibeMsg(msg) {
    console.log(msg);
}
//call fn
exibeMsg('hello world');
var nmFuncao = 'exibeMsg';
exibeMsg("Uma outra chamada da funcao " + nmFuncao);
// funções com parametros(argumentos) opcionais
var soma = 10;
function contador(inc) {
    if (inc === void 0) { inc = 1; }
    soma += inc;
    console.log(soma);
}
contador();
contador(5);
contador(10);
/*function contador2(valor?:number): void {
    console.log(valor)
    soma += valor | 1;
    console.log(soma)
}

contador2();*/
// arrow function com expressão ternária
var parOuImpar;
parOuImpar = function (valor) { return (valor % 2 == 0) ? "Par" : "Impar"; };
console.log(parOuImpar(2));
