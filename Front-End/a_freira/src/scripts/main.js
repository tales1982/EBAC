const dropDown = document.querySelector('.btn_hidden');
const linkShare = document.querySelector('.hidden');
let isHidden = true; // Variável para rastrear o estado atual

dropDown.addEventListener('click', function () {
  if (isHidden) {
    // Adicionar a classe 'hiden.fechado' quando estiver fechado
    linkShare.classList.add('hiden.fechado');
    linkShare.classList.toggle('fechado');
  } else {
    // Remover a classe 'hiden.fechado' quando estiver aberto
    linkShare.classList.remove('hiden.fechado');
    linkShare.classList.toggle('aberto');
  }
  isHidden = !isHidden; // Inverter o estado atual
});