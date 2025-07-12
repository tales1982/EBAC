document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.form').addEventListener('submit', function (ev) {
        ev.preventDefault();
        let capturarValor = document.querySelector('#numero-Digitado').value;

        let res = document.getElementById('resultado');
        let resP = document.getElementById('paragrafo').style.display = 'block';


        res.innerHTML = (`O número a ser analisado aqui será ${capturarValor}<hr>`)
        res.innerHTML += (`O seu valor absoluto é ${Math.abs(capturarValor)}<br>`)
        res.innerHTML += (`A sua parte inteira é ${Math.trunc(capturarValor)}<br>`)
        res.innerHTML += (`A sua raiz quadrada é ${Math.sqrt(capturarValor)}<br>`)
        res.innerHTML += (`A sua raiz cúbica é ${Math.cbrt(capturarValor)}<br>`)
        res.innerHTML += (`O valor de ${capturarValor}<sup>2</sup> é ${Math.pow(capturarValor, 2)}<br>`)
        res.innerHTML += (`O valor  de ${capturarValor} <sup>3</sup> é ${Math.pow(capturarValor, 3)}`)

        document.querySelector('#numero-Digitado').value = '';

    })
})
