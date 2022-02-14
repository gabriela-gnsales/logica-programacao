console.log("=== VARIAVEIS ===");

// JavaScript - Especificação -> EcmaScript
// até jun/2015 - especificação ESS
// mais ou menos em jul/2015 - surgiu o ES6
// em 2016 (ES7), 2017 (ES8)...

// ES5 -> var (códigos mais antigos)
// ES6 -> let / const (códigos mais modernos)

// Padrão ASI (Automatic Semicolon Insert) - o JavaScript "automagicamente" coloca o ponto e vírgula no final (;), mas é melhor colocar, pq existe algumas construções de código que irá quebrar o padrão (vai falhar)

// Tipos de dados / Tipos de variáveis
// = é um sinal de atribuição
// JavaScript utiliza tipagem dinâmica
// Tipos Primitivos: srtring, number, boolean, null, undefined
var nome = "Leonardo"; // string
console.log("nome", nome, typeof nome);

let idade = 39; // number
console.log("idade", idade, typeof idade);
let altura = 1.89; // number (não tem diferença entre nº inteiro e de ponto flutuante)
console.log("altura", altura, typeof altura);

const magro = false; // boolean
console.log("magro", magro, typeof magro);

var nula = null;
console.log("nula", nula, typeof nula); // type null = object

var indefinida;
console.log("indefinida", indefinida, typeof indefinida); // type indefinida = undefined

// Diferenças entre var / let / const

// VAR permite que a variável seja declarada mais de uma vez (redeclaração)
var nome = 1; 
console.log("nome", nome, typeof nome);
// VAR permite reatribuição de valor
nome = false;
console.log("nome", nome, typeof nome);

// LET NÃO permite redeclaração de variável (mesmo se a variável tenha sido declarada anteriormente com VAR ou CONST)
// let idade = 25;
// console.log("idade", idade, typeof idade); // SyntaxError
// LET permite fazer reatribuição de valor
idade = 25;
console.log("idade", idade, typeof idade);

// CONST NÃO permite redeclaração de variável 
// const magro = true; // SyntaxError
// CONST NÃO permite fazer reatribuição de valor
// magro = true; // TypeError