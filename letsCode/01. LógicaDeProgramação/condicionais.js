//If/Else

let condicao = x > 0;

if(condicao){
    console.log("X é maior do que zero");
}

else{
    console.log("X é menor ou igual a que zero");
}

if(x > 0){
    console.log("X é positivo");
}

else if(x == 0){
    console.log("X é zero");
}

else{
    console.log("X é negativo");
}


//Operador Tenário

let paridade = x % 2 === 0 ? 'par' : 'impar';


//Switch

let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}


let sinal = 'azul';
switch(sinal){
    case 'verde' : 
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('esse não é um valor válido');
        break;
}
