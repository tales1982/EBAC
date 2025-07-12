// Outros exemplos

function aguardarTempo(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  async function exemploAsyncAwait() {
    console.log('Início da função assíncrona');
    
    await aguardarTempo(2000); // Aguarde por 2 segundos (simulando uma operação assíncrona)
    
    console.log('Passaram-se 2 segundos');
    
    await aguardarTempo(1000); // Aguarde por mais 1 segundo
    
    console.log('Passaram-se 3 segundos no total');
  }
  
  exemploAsyncAwait();
  