import './Dependentes.css'

export default function Dependentes({dependente}:any){
    return(
        <div className="Depentente-Card">
            <div>{dependente.nome}</div>
            <div>{dependente.data_nascimento}</div>
            <div>R$ {dependente.abono_salarial.toLocaleString()}</div>
        </div>
    )
}