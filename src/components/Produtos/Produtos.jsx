/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Produtos.module.css';
import blusa from '../../assets/image/blusa.jpeg'

function Produto() {
    return(
        <>
            <div className={style.container}>

                <div className={style.centro}>

                    <div className={style.cards}>
                        <img src={blusa}></img>
                        <div className={style.texts}>
                        <h1>Cropped Vintage</h1>
                        <h2>R$ 12,60</h2>
                        <button>comprar</button>
                        </div>
                    </div>

                    <div className={style.cards}>
                        <img src={blusa}></img>
                        <div className={style.texts}>
                        <h1>Cropped Vintage</h1>
                        <h2>R$ 12,60</h2>
                        <button>comprar</button>
                        </div>
                    </div>

                    <div className={style.cards}>
                        <img src={blusa}></img>
                        <div className={style.texts}>
                        <h1>Cropped Vintage</h1>
                        <h2>R$ 12,60</h2>
                        <button>comprar</button>
                        </div>
                    </div>

                    <div className={style.cards}>
                        <img src={blusa}></img>
                        <div className={style.texts}>
                        <h1>Cropped Vintage</h1>
                        <h2>R$ 12,60</h2>
                        <button>comprar</button>
                        </div>
                    </div>

                    <div className={style.cards}>
                        <img src={blusa}></img>
                            <div className={style.texts}>
                        <h1>Cropped Vintage</h1>
                        <h2>R$ 12,60</h2>
                        <button>comprar</button>
                        </div>
                    </div>

                    <div className={style.cards}>
                        <img src={blusa}></img>
                        <div className={style.texts}>
                        <h1>Cropped Vintage</h1>
                        <h2>R$ 12,60</h2>
                        <button>comprar</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Produto;