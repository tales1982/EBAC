document.addEventListener('DOMContentLoaded',function(){
    const modalExemplo = new bootstrap.Modal('#exemplo-modal')
    setInterval(function(){
         modalExemplo.show()
    },3000)
    
   
})