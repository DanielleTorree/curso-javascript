//A classe (class) é uma estrutura que será replicada
//Dentros das {} fica o que a classe contém
//E o que nela contém, chama-se "campos" ou "atributos"

class Cliente{
    nome;
    cpf;
};

class ContaCorrente{
    agencia;
    _saldo = 0;

    //toda vez que vir o underline na frente do atributo, quer dizer que é um campo privado, isso é uma conveção da comunidade, porém o atributo não fica de fato privado. Somente quando se usa o # na frente do atributo, é que fica como campo privado de verdade. 
    
    //verifique no github o uso do #: https://github.com/tc39/proposal-class-fields

    //sacar == comportamento (método)
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(this._saldo);
        }

        //como o this.#saldo é um campo privado, ele não pode ser acessado (visto) fora da classe que ele foi definido
    }
};

const cliente1 = new Cliente();
cliente1.nome = "Danielle";
// cliente1.cpf = 112345678910;
// console.log(cliente1);

const contaCorrenteDanielle = new ContaCorrente();


contaCorrenteDanielle._saldo = 10000;


contaCorrenteDanielle.agencia = 1001;

contaCorrenteDanielle.depositar(100);
contaCorrenteDanielle.depositar(200);
contaCorrenteDanielle.depositar(300);

contaCorrenteDanielle.sacar(50);

console.log(contaCorrenteDanielle);


// const cliente2 = new Cliente();
// cliente2.nome = "Alex";
// cliente2.cpf = 112345678910;
// console.log(cliente2);