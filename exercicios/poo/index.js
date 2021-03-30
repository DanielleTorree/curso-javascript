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
// cliente1.cpf = 112345678910;
// console.log(cliente1);

const contaCorrenteDanielle = new ContaCorrente();
contaCorrenteDanielle.saldo = 100;
contaCorrenteDanielle.agencia = 1001;

contaCorrenteDanielle.depositar(100);
contaCorrenteDanielle.sacar(50);

console.log(contaCorrenteDanielle);


// const cliente2 = new Cliente();
// cliente2.nome = "Alex";
// cliente2.cpf = 112345678910;
// console.log(cliente2);