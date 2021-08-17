import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../Components/ItemDetail';

export const ItemDetailContainer= () => {

const [listProducts, setListProducts]= useState([]);

useEffect( () => {
    async function getItems(){
        const response= await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=rack&limit=1");
        const data = await response.json();
        setListProducts(data.results)
    }
    getItems();

}, [])
 

    return(
        <section>
        {
            listProducts.map(element => {
             return(
                <ItemDetail name={element.title} price={element.price} img={element.thumbnail}/>
              )
            })
        }
        </section>
    )
};