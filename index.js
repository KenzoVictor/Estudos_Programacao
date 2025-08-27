class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return "Olá, eu sou " + this.nome;
  }
}

const pessoa = new Pessoa("João", 19);

console.log(pessoa.saudacao());

class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.cursoAluno = cursoAluno;
  }

  curso() {
    return `Olá, eu sou ${this.nome} e estou estudando ${this.curso}`;
  }
}

const aluno = new Aluno("João", 19, "Programação");
console.log(aluno.cursoAluno());