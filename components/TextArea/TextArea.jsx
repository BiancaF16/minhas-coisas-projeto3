export function TextArea(props){
    return (<div className={props.className}>
        <textarea readonly name="" id="" cols="30" rows="10">{props.value}</textarea>
      </div>)
}