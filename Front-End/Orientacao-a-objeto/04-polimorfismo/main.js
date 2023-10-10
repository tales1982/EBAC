//============== Polimorfismo ====================
// O polirfismo e a capacidade de executa a mesma tarefa de formas diferentes.

class Veiculo {
    constructor(velocidadeMaxima) {
      this.velocidadeMaxima = velocidadeMaxima;
      this._velocidadeAtual = 0; // Velocidade inicial é zero.
    }
  
    get velocidadeAtual() {
      return this._velocidadeAtual;
    }
  
    set velocidadeAtual(novaVelocidade) {
      if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
        this._velocidadeAtual = novaVelocidade;
      } else {
        console.log('Velocidade inválida!');
      }
    }
  
    acelerar(aceleracao) {
      if (this._velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
        this._velocidadeAtual += aceleracao;
      } else {
        console.log('Aceleração excede a velocidade máxima.');
      }
    }
  
    frear(deceleracao) {
      if (this._velocidadeAtual - deceleracao >= 0) {
        this._velocidadeAtual -= deceleracao;
      } else {
        console.log('Você já está parado.');
      }
    }
  }
  
  class Carro extends Veiculo {
    constructor(modelo, velocidadeMaxima) {
      super(velocidadeMaxima);
      this.modelo = modelo;
    }
  }
  
  class Bicicleta extends Veiculo {
    constructor(tipo, velocidadeMaxima) {
      super(velocidadeMaxima);
      this.tipo = tipo;
    }
  }
  
  // Exemplo de uso:
  
  const carro = new Carro('Sedan', 200);
  const bicicleta = new Bicicleta('Mountain Bike', 30);
  
  carro.acelerar(100);
  console.log(`Velocidade do carro: ${carro.velocidadeAtual} km/h`);
  
  bicicleta.acelerar(25);
  console.log(`Velocidade da bicicleta: ${bicicleta.velocidadeAtual} km/h`);
  