
function somar(x, y){
    return x+y;
}

function contar(qtd){
    let retorno = 0;
    for(i=0; i <= qtd; i++){
        retorno++;
    }
    return retorno;
}

function obterDataAtual(){
    return Date();
}

function getRandomArbitrary() {
    let min = 1000000000;
    let max = 9999999999;
    return Math.random() * (max - min) + min;
}

let getDate = function (){ //função anonima
    return Date();
}

let arrFunction = (p1) =>{ // Arrow Function com parâmetro
    return (p1 ==1) ? 'Danilinda' : 'Alex'; // Condicional Ternária
}

let arrFunction2 = () =>{ // Arrow Function sem parâmetro
    return 'Danilinda'
}


console.log(contar(1000000), somar(10,5), obterDataAtual(), parseInt(getRandomArbitrary()), getDate(), arrFunction(2), arrFunction2() );


/* FUNÇÕES ASSÍNCRONAS */
async function somar1(x, y){
    return x+y;
}

async function somar2(x, y){
    setTimeout(() => {console.log(x+y)}, 300);
}

function contar1(qtd){
    let retorno = 0;
    for(i=0; i <= qtd; i++){
        retorno++;
    }
    console.log(retorno);
}

function obterDataAtual1(){
    console.log(Date());
}

function getRandomArbitrary1() {
    let min = 1000000000;
    let max = 9999999999;
    console.log(parseInt(Math.random() * (max - min) + min));
}

/*
somar2(25,40)
.then(() =>{
    somar1(20,30)
    .then(ret =>{
        console.log(ret);
        contar1(5000000);
        obterDataAtual1();
        getRandomArbitrary1();
    })
})
*/

