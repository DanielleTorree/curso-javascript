//A classe (class) é uma estrutura que será replicada
//Dentros das {} fica o que a classe contém
//E o que nela contém, chama-se "campos" ou "atributos"

class Cliente{
    nome;
    cpf;
};

class ContaCorrente{
    agencia;
    saldo;
};

const cliente1 = new Cliente();
cliente1.nome = "Danielle";
cliente1.cpf = 17320610760;

const cliente2 = new Cliente();
cliente2.nome = "Alex";
cliente2.cpf = 36131957630;

const contaCorrenteDanielle = new ContaCorrente();
contaCorrenteDanielle.saldo = 0;
contaCorrenteDanielle.agencia = 1001;

console.log(cliente1);
console.log(cliente2);