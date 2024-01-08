import styles from './Carrinho.module.css';
import { useState } from "react";
import ReactModal from 'react-modal';
import Botao from '../botao/Botao'
import { GoX } from "react-icons/go";
import Regata from '../../assets/image/regata.jpg';

function Carrinho(props) {

    const [qtde, setQtde] = useState(0)

    function operacao(simbolo) {
        if (simbolo === 'diminuir' && qtde > 0) {
            setQtde(qtde - 1)
        }
        else {
            setQtde(qtde + 1)
        }
    };

    return (



        <ReactModal
            isOpen={props.abrir}
            onRequestClose={() => props.setAbrir(false)}

            style={{
                overlay: {
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(000, 000, 000, 0.5)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                },

                content: {
                    background: '#D9E6EC',
                    position: 'relative',
                    top: 0,
                    right: 0,
                    width: '29%',
                }
            }}
        >
            <div className={styles.container}>
                <div className={styles.cabecalho}>

                    <h1 className={styles.titulo}>Meu Carrinho</h1>
                    <button className={styles.fechar}>
                        <GoX onClick={() => props.setAbrir(false)} />
                    </button>
                </div>
                <div className={styles.compras}>
                    <div className={styles.produto}>
                        <img src={Regata} className={styles.img} alt="imagem" />
                        <div>
                            <h4>Produto</h4>
                            <p>00.00</p>
                            <div>
                                <button className={styles.bnt1} onClick={() => operacao('diminuir')}>-</button>
                                <input className={styles.Input} value={qtde} />
                                <button className={styles.bnt2} onClick={() => operacao('somar')}>+</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.rodape}>
                <div className={styles.subtotal}>
                    <h3>Subtotal</h3>
                    <span className={styles.valor}>R$ 0</span>
                </div>
                <div className={styles.botoes}>
                    <Botao className={styles.bnt} label="Limpar tudo" />
                    <Botao className={styles.bnt} label="Comprar"/>

                </div>
            </div>
        </ReactModal>
    );
};



export default Carrinho;