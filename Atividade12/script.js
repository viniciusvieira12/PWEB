// funcao construtora do Retângulo
function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
    this.calcularArea = () => this.base * this.altura;
}

// Classe Conta utlizando class
class Conta {
    constructor() {
        this._nomeCorrentista = "";
        this._banco = "";
        this._numeroConta = "";
        this._saldo = 0;
    }

    setNomeCorrentista(value) {
        this._nomeCorrentista = value;
    }

    getNomeCorrentista() {
        return this._nomeCorrentista;
    }

    setBanco(value) {
        this._banco = value;
    }

    getBanco() {
        return this._banco;
    }

    setNumeroConta(value) {
        this._numeroConta = value;
    }

    getNumeroConta() {
        return this._numeroConta;
    }

    setSaldo(value) {
        this._saldo = value;
    }

    getSaldo() {
        return this._saldo;
    }
}

//herdando Conta com extends
class Corrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = 0;
    }

    setSaldoEspecial(value) {
        this._saldoEspecial = value;
    }

    getSaldoEspecial() {
        return this._saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = "";
    }

    setJuros(value) {
        this._juros = value;
    }

    getJuros() {
        return this._juros;
    }

    setDataVencimento(value) {
        this._dataVencimento = value;
    }

    getDataVencimento() {
        return this._dataVencimento;
    }
}

//criacao e exibicao dos objetos
let ret;
let cc;
let cp;

//criando o retangulo conforme dados informados
function criarRetangulo() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    if (base === "" || altura === "" || isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Insira valores válidos para base e altura (maiores que zero).");
        return;
    }

    base = Number.parseFloat(base);
    altura = Number.parseFloat(altura);

    ret = new Retangulo(base, altura);

    alert("Retângulo criado com sucesso.");
}

//exibicao das informacoes do retangulo
function exibirRetangulo() {
    if (ret === undefined) {
        alert("Crie o retângulo primeiro.");
        return;
    }

    document.getElementById("retanguloBase").textContent = ret.base;
    document.getElementById("retanguloAltura").textContent = ret.altura;
    document.getElementById("retanguloArea").textContent = ret.calcularArea().toFixed(2);
}

//criando conta corrente conforme dados informados
function criarCorrente() {
    let nome = document.getElementById("nomeCorrente").value;
    let banco = document.getElementById("bancoCorrente").value;
    let numero = document.getElementById("numeroCorrente").value;
    let saldo = document.getElementById("saldoCorrente").value;
    let saldoEsp = document.getElementById("saldoEspecial").value;

    if (nome === "" || banco === "" || numero === "" || saldo === "" || saldoEsp === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (isNaN(numero) || isNaN(saldo) || isNaN(saldoEsp)) {
        alert("Número da conta, saldo e saldo especial devem ser numéricos.");
        return;
    }

    cc = new Corrente();
    cc.setNomeCorrentista(nome);
    cc.setBanco(banco);
    cc.setNumeroConta(Number.parseInt(numero));
    cc.setSaldo(Number.parseFloat(saldo));
    cc.setSaldoEspecial(Number.parseFloat(saldoEsp));

    alert("Conta Corrente criada com sucesso.");
}

//exibicao das informacoes da conta corrente
function exibirCorrente() {
    if (cc === undefined) {
        alert("Crie a conta corrente primeiro.");
        return;
    }

    document.getElementById("correnteNome").textContent = cc.getNomeCorrentista();
    document.getElementById("correnteBanco").textContent = cc.getBanco();
    document.getElementById("correnteNumero").textContent = cc.getNumeroConta();
    document.getElementById("correnteSaldo").textContent = cc.getSaldo();
    document.getElementById("correnteSaldoEspecial").textContent = cc.getSaldoEspecial();
}

//criando o conta poupanca conforme dados informados
function criarPoupanca() {
    let nome = document.getElementById("nomePoupanca").value;
    let banco = document.getElementById("bancoPoupanca").value;
    let numero = document.getElementById("numeroPoupanca").value;
    let saldo = document.getElementById("saldoPoupanca").value;
    let juros = document.getElementById("jurosPoupanca").value;
    let vencimento = document.getElementById("dataVencimentoPoupanca").value;

    if (nome === "" || banco === "" || numero === "" || saldo === "" || juros === "" || vencimento === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (isNaN(numero) || isNaN(saldo) || isNaN(juros)) {
        alert("Número da conta, saldo e juros devem ser numéricos.");
        return;
    }

    cp = new Poupanca();
    cp.setNomeCorrentista(nome);
    cp.setBanco(banco);
    cp.setNumeroConta(Number.parseInt(numero));
    cp.setSaldo(Number.parseFloat(saldo));
    cp.setJuros(Number.parseFloat(juros));
    cp.setDataVencimento(vencimento);

    alert("Conta Poupança criada com sucesso.");
}

//exibicao das informacoes da conta poupanca
function exibirPoupanca() {
    if (cp === undefined) {
        alert("Crie a conta poupança primeiro.");
        return;
    }

    document.getElementById("poupancaNome").textContent = cp.getNomeCorrentista();
    document.getElementById("poupancaBanco").textContent = cp.getBanco();
    document.getElementById("poupancaNumero").textContent = cp.getNumeroConta();
    document.getElementById("poupancaSaldo").textContent = cp.getSaldo();
    document.getElementById("poupancaJuros").textContent = cp.getJuros() + "%";
    document.getElementById("poupancaVenc").textContent = cp.getDataVencimento();
}
