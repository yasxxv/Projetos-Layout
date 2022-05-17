// Recebendo uma Função como Parâmetro

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a,b);

const resultado1  = aplicarOperacao(1,2,somar);
const resultado2 = aplicarOperacao(1,2,subtrair); 

// No código acima declaramos três funções, somar, subtrair e aplicarOperacao. As duas primeiras recebem dois parâmetros e devolvem um valor. A aplicarOperacao recebe três parâmetros, sendo o terceiro uma função a ser aplicada passando os dois primeiros parâmetros. Nas linhas 5 e 6 são passados, respectivamente, as funções somar e subtrair.

// Retornando Funções

// Nós podemos retornar funções como uma forma de construir abstrações mais complexas, onde uma função é um geradora de funções. No exemplo a seguir, temos a função somarX, que recebe x de parâmetro e retorna uma função que recebe y e retorna x+y. Note que ao passar 1 para somarX, criamos uma função que soma 1. E assim sucessivamente.

const somarX = (x) => (y) => x + y;

const somar1 = somarX(1);
const somar2 = somarX(2);
const somar3 = somarX(3);
