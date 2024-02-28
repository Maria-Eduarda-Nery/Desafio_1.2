//Mostra na tela a mensagem "Ano novo está chegando!!", pelo console.log;
console.log("Ano novo está chegando");

//variavel que receba o nome da cantora 
let cantora = "Mariah Carey";
console.log(cantora);

//variável idade 
let idade = 54;

console.log(idade);

//variável do ano atual - a idade 
let ano = 2023;
let _idade = 54;

console.log((ano = ano - _idade));

let quartaFeira = false;

console.log(quartaFeira);

console.log(typeof quartaFeira);

//variavel para idade adequada
let Idade = 27;

if (Idade >= 18) {
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

if (mes != "Agosto" || $mes == "Dezembro" || _mes != `Junho`) {
  console.log(
    `Uma ou mais opções estão corretas. O mês escolhido foi o mês de ${$mes}`
  );
} else {
  console.log(
    `Algo de errado não está certo, o mês digitado foi o mês ${Junho}`
  );
}