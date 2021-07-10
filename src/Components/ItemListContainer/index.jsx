import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import { CardProductos } from '../CardProductos';

export const ItemContainer= ({greeting}) => {
const [listProducts, setListProducts]= useState([]);

useEffect( () => {
    async function getData(){
        const response= await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=rack&limit=10");
        const data = await response.json();
        setListProducts(data.results)
    }

    getData();
}, [])


    return(
        <section>
        <h1 className="jumbotron text-center">{greeting}</h1>

        {
            listProducts.map(element => {
                console.log(element)
             return(
                <CardProductos name={element.title} price={element.price} img={element.thumbnail}/>
              )
            })
        }
        </section>
    )
};