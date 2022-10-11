import './ListaSuspensa.css'

function ListaSuspensa (props) {
    return(
        <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select required = {props.obrigatorio} >
            {props.item.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
        </div>
    )
}

export default ListaSuspensa