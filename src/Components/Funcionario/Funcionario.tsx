import Dependentes from "../Dependentes/Dependentes";
import './Funcionario.css'


export default function Funcionario({funcionario}:any) {

  function calcula():number{
    let resultado = funcionario.salario_base;

    funcionario.dependentes.forEach((dependente:any) => {
      resultado -= dependente.abono_salarial;
    });

    return resultado;
  }

  return (
    <div className='Card'>
      <div className='Nome'>{funcionario.nome_completo}</div>
      <div className='Setor'>{funcionario.setor}</div>
      <div className='Data'>{funcionario.data_admissao}</div>
      <div className='Salario'>R$ {funcionario.salario_base.toLocaleString()}</div>
      <div className='Dependentes'>
        {funcionario.dependentes.map((dependente:any)=>(
          <Dependentes dependente={dependente}/>
        ))}
      </div>
      <div className='Resultado'>R$ {calcula().toLocaleString()}</div>
    </div>
  )
}