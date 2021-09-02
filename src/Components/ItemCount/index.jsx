import { useEffect, useState } from 'react';

export const ButtonComponent= ({parentCallback}) => {
    const [contador, setContador]= useState(0);

function ValidadorContadorNegativo () {
    if (contador<1) {
        let contador= 0;
    } else {
        setContador(contador-1);
    }
}

function ValidarStock () {
    setContador(contador+1)
}
function sendData(){
    parentCallback(contador+1);

}
    return (
        <section>
        <button class="btn btn-secondary" onClick={() => {ValidadorContadorNegativo()}}>-</button>
        {contador}
        <button class="btn btn-secondary" onClick={() => {ValidarStock(); sendData()}}>+</button>
        </section>
    )
}

