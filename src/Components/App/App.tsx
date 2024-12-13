import './App.css'
import data from '../../data.json'
import Funcionario from '../Funcionario/Funcionario'

function App() {

  return (
    <div className='App'>
      {data.funcionarios.map((funcionario:any)=>(
        <Funcionario funcionario={funcionario}/>
      ))}
    </div>
  )
} 

export default App
