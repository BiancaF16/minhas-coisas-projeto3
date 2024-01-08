import React from 'react';
import styles from './Select.module.css';

const Select = (props) => {
    return (
        <div className={styles.Select}>
            <label className={styles.label} htmlFor={props.label}>{props.label}</label>
            <select className={styles.selecao} id={props.label}>
                <option className={styles.option} value="0">{props.options}</option>
            </select>
        </div>
    );
}

export default Select;
