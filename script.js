//Mostra na tela a mensagem "Ano novo está chegando!!", pelo console.log;
console.log("Ano novo está chegando");

//variavel que recebe o nome da cantora 
let cantora = "Mariah Carey";
console.log(cantora);

//variável idade 
let idade = 54;

console.log(idade);

//variavel do ano atual - a idade 
let ano = 2024;
let _idade = 54;

console.log((ano = ano - _idade));

let quartaFeira = false;

console.log(quartaFeira);

console.log(typeof quartaFeira);

//variavel para idade adequada
let Idade = 20;

if (Idade >= 15) {
  console.log(
    "Voce esta na idade certa, vai poder curtir o show "
  );
} else {
  console.log("infelizmente, não foi desta vez");
}

//variavel do aniversario
let mes = "Agosto";
let $mes = "Dezembro";
let _mes = `Junho`;

if (mes != "Agosto" || $mes == "Dezembro" || _mes != "Junho") {
  console.log(
    `uma ou mais opçõs estão corretas, O mes escolhido foi ${$mes}`
  );
} else {
  console.log(
    `algo não esta correto, o mes digitado foi ${Junho}`
  );
}