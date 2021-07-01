import { useState } from 'react';

export const ButtonComponent= () => {
    const [contador, setContador]= useState(1);

function ValidadorContadorNegativo () {
    if (contador<1) {
        let contador= 0;
    } else {
        setContador(contador-1);
    }
}

function ValidarStock () {
    if (contador>5){
        console.log(`No hay stock`)
    } else {
        setContador(contador+1)
    }
}

    return (
        <section>
        <button class="btn btn-secondary" onClick={() => {ValidadorContadorNegativo()}}>-</button>
        {contador}
        <button class="btn btn-secondary" onClick={() => {ValidarStock()}}>+</button>
        </section>
    )
}