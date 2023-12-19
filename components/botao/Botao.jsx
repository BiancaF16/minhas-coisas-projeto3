function Botao(props){
    return(
        <div>
            <button className={props.className}>{props.label}</button>
        </div>
    )
}

export default Botao;