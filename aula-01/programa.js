// armazenando dados:
// var nome = "Gabi";
// var email = "gabriela.gnsales@gmail.com";
// var telefone = "9 9142-9011";

// entrada de dados:
var nome = prompt('Digite seu nome');
var email = prompt('Digite seu e-mail');
var telefone = prompt('Digite seu telefone');

// executando instruções
// têm comandos que são executados sem contexto e outros com contexto (tem um ponto separando)
// comando(param1, param2)
// contexto.comando(param1, param2)

// saída de dados no console (p/ o programador)
console.log('nome', nome);
console.log('email', email);
console.log('telefone', telefone);

// saída de dados na tela
document.write('<hr>Nome: ', nome, '<br>');
document.write('<p>E-mail: ', email, '</p>');
document.write('Telefone: ', telefone,'<hr>');


