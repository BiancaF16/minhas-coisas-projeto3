import styles from './Input.module.css';

function Input(props) {
    return(
        <div className={styles.form}>
            <label className={styles.label}>{props.label}</label>
            <input 
            className={styles.Input} 
            type={props.type} 
            onChange={props.onChange}
            value={props.value}
            id={props.id}
            />
            
        </div>
    )
    
};

export default Input;