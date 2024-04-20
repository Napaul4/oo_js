console.log("Bem-vinda(o) ao PetScript")

function Caes(nome, porte, preco) {
  this.nome = nome;
  this.porte = porte;
  let _preco = preco;

  this.getPreco = function () {
    return _preco;
  }

  this.setPreco = function (valor) {
    if (typeof valor === 'number') {
      _preco = valor;
    }
  }

  this.aumento = function () {
    const novoPreco = _preco * 1.2;
    _preco = novoPreco;
  }

  this.mostraPorte = function () {
    console.log(this.porte);
  }
}

function Pequeno(nome) {
  Caes.call(this, nome, "Pequeno", 110);

  this.aumento = function () {
    const novoPreco = this.getPreco() * 1.2;
    this.setPreco(novoPreco);
  }
}

function Grande(nome) {
  Caes.call(this, nome, "Grande", 200);

  this.aumento = function () {
    const novoPreco = this.getPreco() * 1.3;
    this.setPreco(novoPreco);
  }
}

const especie1 = new Caes("Bolinha", "Médio", 60);
const especie2 = new Pequeno("Pluto");
const especie3 = new Grande("Shark");

console.log(especie1.nome)
console.log("Porte " + especie1.porte)
especie1.aumento();
console.log(especie1.getPreco());

console.log(especie2.nome)
console.log("Porte " + especie2.porte)
especie2.aumento();
console.log(especie2.getPreco());

console.log(especie3.nome)
console.log("Porte " + especie3.porte)
especie3.aumento();
console.log(especie3.getPreco());