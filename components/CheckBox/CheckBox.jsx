import styles from './CheckBox.module.css';

function CheckBox(props) {
    return(
    <div className={styles.lembreseMin}>
        <input className={styles.Check} type="checkbox"/>
        <label className={styles.frase}>{props.label}</label>
    </div>
    )

    
};

export default CheckBox;