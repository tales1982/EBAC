const btnEnviar = document.querySelector('#gerar-pdf');

btnEnviar.addEventListener("click",()=>{

    //conteudo do PDF
    const conteudoDoFormulario = document.querySelector("#conteudoHTML");

    //configuracao do arquivo final de PDF
    const option = {
        magin:[10,10,10,10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF:{unit: "mm", format: "a4", orientation: "portrait"}
    }

    //gerar e baixar o PDF
    html2pdf().set(option).from(conteudoHTML).save();
    
})