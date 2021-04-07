"use strict";
// posso usar o ctrl ' para chamar o terminal e o comando "npx tsc parte1 --watch", pra compilar sempre que salvar
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
//-----------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção
//-----------------------------------------------------------------------------------------
function dobro(x) {
    return x * 2;
}
function triplo(x) {
    return x * 3;
}
var m1 = list1.map(dobro);
var m2 = list1.map(triplo);
//Escrevendo a funcao como expressão lambda
var m3 = list1.map(function (x) { return x * 2; });
console.log('MAP --------------------------');
console.log(m1);
console.log(m2);
console.log(m3);
//----------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção somente com os elementos da coleção original que satisfazem um dado predicado
//----------------------------------------------------------------------------------------------------------------
function par(x) {
    return x % 2 == 0;
}
var f1 = list1.filter(par);
var f2 = list1.filter(function (x) { return x > 2; });
var f3 = list1.filter(function (x) { return x % 2 != 0; });
console.log('FILTER --------------------------');
console.log(f1);
console.log(f2);
console.log(f3);
//----------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
//      (opcional) fornecer valor inicial como parâmetro (necessário para coleção vazia)
//----------------------------------------------------------------------------------------------------------------
function soma(x, y) {
    return x + y;
}
function produto(x, y) {
    return x * y;
}
var r1 = list1.reduce(soma);
var r2 = list1.reduce(produto);
//let r3 = list2.reduce(soma);
var r4 = list2.reduce(soma, 0); // posso informar o valor inicial em qualquer lista mesmo não vazia
console.log('REDUCE --------------------------');
console.log(r1);
console.log(r2);
console.log(r4);
//----------------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro
//----------------------------------------------------------------------------------------------------------------
function ordenacaoCrescente(s1, s2) {
    return s1.length - s2.length;
}
function ordenacaoDecrescente(s1, s2) {
    return s2.length - s1.length;
}
var s1 = nomes.sort(ordenacaoCrescente);
var s2 = nomes.sort(ordenacaoDecrescente);
var s3 = nomes.sort();
var s4 = nomes.sort().reverse();
console.log('SORT --------------------------');
console.log(s1);
console.log(s2);
console.log(s3); // por padrão o javascript ordena crescente 
console.log(nomes.sort(function (x, y) { return x.length - y.length; })); // com expressão lambda
console.log(nomes.sort(function (x, y) { return ((x > y) ? -1 : 1); })); // com expressão lambda
console.log(s4);
