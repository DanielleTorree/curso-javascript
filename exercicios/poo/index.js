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


    //sacar == comportamento (método)
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
};

const cliente1 = new Cliente();
cliente1.nome = "Danielle";
// cliente1.cpf = 17320610760;
// console.log(cliente1);

const contaCorrenteDanielle = new ContaCorrente();
contaCorrenteDanielle.saldo = 0;
contaCorrenteDanielle.agencia = 1001;

console.log(contaCorrenteDanielle.saldo);
contaCorrenteDanielle.depositae += 100;
contaCorrenteDanielle.. += -1;
console.log(contaCorrenteDanielle.saldo);
contaCorrenteDanielle.sacar(50);
console.log(contaCorrenteDanielle.saldo);

// const cliente2 = new Cliente();
// cliente2.nome = "Alex";
// cliente2.cpf = 36131957630;
// console.log(cliente2);