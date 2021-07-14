import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import { CardProductos } from '../../Components/CardProductos';

export const ItemContainerInicio= () => {
        return(
            <section>
                <h1 className="jumbotron text-center">Muebles J&P</h1>

                <div class="card bg-dark text-white">
                    <img src="https://www.madeinitaly.de/wp-content/uploads/2017/10/NMnotte_128-129-scandola.jpg" class="card-img" width="500" height="500"/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">Mueble Dormitorio</h5>
                        <p class="card-text">Mueble personalizado a gusto de cliente</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </section>
        )
    };

export const ItemContainerDormitorio= () => {
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
        <h1 className="jumbotron text-center">Tu dormitorio, Tu espacio</h1>

        {
            listProducts.map(element => {
             return(
                <CardProductos name={element.title} price={element.price} img={element.thumbnail} stock={element.available_quantity}/>
              )
            })
        }
        </section>
    )
};

export const ItemContainerCocina= () => {
    const [listProducts, setListProducts]= useState([]);
    
    useEffect( () => {
        async function getData(){
            const response= await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=mueble_cocina&limit=10");
            const data = await response.json();
            setListProducts(data.results)
        }
    
        getData();
    }, [])
    
        return(
            <section>
            <h1 className="jumbotron text-center">Muebles de cocina a tu medida</h1>
    
            {
                listProducts.map(element => {
                 return(
                    <CardProductos name={element.title} price={element.price} img={element.thumbnail} stock={element.available_quantity}/>
                  )
                })
            }
            </section>
        )
    };

    export const ItemContainerBaño= () => {
        const [listProducts, setListProducts]= useState([]);
        
        useEffect( () => {
            async function getData(){
                const response= await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=mueble_baño&limit=10");
                const data = await response.json();
                setListProducts(data.results)
            }
        
            getData();
        }, [])
        
            return(
                <section>
                <h1 className="jumbotron text-center">Prepara tu baño ideal</h1>
        
                {
                    listProducts.map(element => {
                     return(
                        <CardProductos name={element.title} price={element.price} img={element.thumbnail} stock={element.available_quantity}/>
                      )
                    })
                }
                </section>
            )
        };

        export const ItemContainerJardineria= () => {
            const [listProducts, setListProducts]= useState([]);
            
            useEffect( () => {
                async function getData(){
                    const response= await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=maceteros&limit=10");
                    const data = await response.json();
                    setListProducts(data.results)
                }
            
                getData();
            }, [])
            
                return(
                    <section>
                    <h1 className="jumbotron text-center">Decora tu jardin</h1>
            
                    {
                        listProducts.map(element => {
                         return(
                            <CardProductos name={element.title} price={element.price} img={element.thumbnail} stock={element.available_quantity}/>
                          )
                        })
                    }
                    </section>
                )
            };