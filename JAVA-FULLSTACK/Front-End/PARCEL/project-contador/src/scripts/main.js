AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime(); 

const contarAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;
    1
    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMS);//Dias
    const horasAteOEvento = Math.floor((distanciaDoEvento % (diasEmMS)) / (horaEmMs));//Horas
    const minutosAteOEvento = Math.floor((distanciaDoEvento % (horaEmMs)) / (minutoEMS));
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutoEMS) /1000);

    document.querySelector('#contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    if(distanciaDoEvento < 0){
        clearInterval(contarAsHoras);//limpa a msg para adcionar a nova
        document.querySelector('#contador').innerHTML = `Evento expirado`
    }

},1000)