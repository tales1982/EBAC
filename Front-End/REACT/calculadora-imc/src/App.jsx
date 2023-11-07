import styles from './App.module.css'
import Title from './components/Title/main'
import Calculadora from './components/Calculadora/main'


function App() {

  return (

    <div className={styles.container}>
      <Title/>
      <Calculadora/>
    </div>
    
   

  )
}

export default App
