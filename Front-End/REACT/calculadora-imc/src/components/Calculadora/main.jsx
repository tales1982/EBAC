import { useState } from "react";
import style from './Calculadora.module.css'

const Calculadora = () => {
    const [valorPeso, setValorPeso] = useState("");
    const [valorAltura, setValorAltura] = useState("");
    const [resultadoFinal, setResultadoFinal] = useState(0);

    const calcularIMC = () => {
        const resultado = valorPeso / (valorAltura * valorAltura);
        setResultadoFinal(resultado);
    };

    return (
        <div className={style.bodyCalc}>
            <h2 className={style.bodyCalcH2}>IMC</h2>
            <form className={style.form}>
                <div className={style.divForm}>
                    <label htmlFor="peso">PESO :</label>
                    <input
                        onChange={(evento) => setValorPeso(evento.target.value)}
                        type="number"
                        id='peso'
                    />
                </div>
                <div className={style.divForm}>
                    <label htmlFor="altura">ALTURA :</label>
                    <input
                        onChange={(evento) => setValorAltura(evento.target.value)}
                        type="number"
                        id='altura'
                    />
                </div>
                <button
                    type='button'
                    id='calculaIMC'
                    className={style.calcularIMC}
                    onClick={calcularIMC}
                >
                    CALCULAR
                </button>
                <div className={style.result}>
                    Resultado: {resultadoFinal.toFixed(2)}
                </div>
            </form>
        </div>
    )
}

export default Calculadora;
