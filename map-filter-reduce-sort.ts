// posso usar o ctrl ' para chamar o terminal e o comando "npx tsc parte1 --watch", pra compilar sempre que salvar

export { }


let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

//-----------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção
//-----------------------------------------------------------------------------------------

function dobro(x : number) : number {   // recebe x do tipo number e retorna o : number
    return x * 2;
}

function triplo(x : number) : number {   // recebe x do tipo number e retorna o : number
    return x * 3;
}

let m1 = list1.map(dobro);
let m2 = list1.map(triplo);


//Escrevendo a funcao como expressão lambda

let m3 = list1.map(x => x * 2);

console.log('MAP --------------------------');
console.log(m1);
console.log(m2);
console.log(m3);

//----------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção somente com os elementos da coleção original que satisfazem um dado predicado
//----------------------------------------------------------------------------------------------------------------

function par(x : number) : boolean {
    return x % 2 == 0;
}

let f1 = list1.filter(par);
let f2 = list1.filter(x => x > 2);
let f3 = list1.filter(x => x % 2 != 0);


console.log('FILTER --------------------------');
console.log(f1);
console.log(f2);
console.log(f3);

//----------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
//      (opcional) fornecer valor inicial como parâmetro (necessário para coleção vazia)
//----------------------------------------------------------------------------------------------------------------

function soma(x: number, y:number) : number {
    return x + y;
}

function produto(x: number, y:number) : number {
    return x * y;
}

let r1 = list1.reduce(soma);
let r2 = list1.reduce(produto);
//let r3 = list2.reduce(soma);
let r4 = list2.reduce(soma, 0); // posso informar o valor inicial em qualquer lista mesmo não vazia

console.log('REDUCE --------------------------');
console.log(r1);
console.log(r2);
console.log(r4);

//----------------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro
//----------------------------------------------------------------------------------------------------------------

function ordenacaoCrescente(s1: string, s2: string) : number {   //Quando comparo texto vai retornar um número < 0 se o 1o for menor, 0 se forem iguais e > 0 se o 2o for maior
    return s1.length - s2.length;
}

function ordenacaoDecrescente(s1: string, s2: string) : number {   //Quando comparo texto vai retornar um número < 0 se o 1o for menor, 0 se forem iguais e > 0 se o 2o for maior
    return s2.length - s1.length;
}

let s1 = nomes.sort(ordenacaoCrescente);
let s2 = nomes.sort(ordenacaoDecrescente);
let s3 = nomes.sort();
let s4 = nomes.sort().reverse();  // dizem que o reverse é mais performático

console.log('SORT --------------------------');
console.log(s1);
console.log(s2);
console.log(s3);  // por padrão o javascript ordena crescente 
console.log(nomes.sort((x, y) => x.length - y.length));  // com expressão lambda
console.log(nomes.sort((x, y) => ((x > y) ? -1 : 1)));  // com expressão lambda
console.log(s4);

