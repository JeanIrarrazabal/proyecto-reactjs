import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import { CardProductos } from '../../Components/CardProductos';
import { getFirestore } from '../../FireBase/Index';

export const ItemContainerInicio= () => {
        return(
            <section>
                <h1 className="jumbotron text-center">Pasteleria Dulce</h1>

                <div class="card bg-dark text-white">
                    <img src="https://www.pequerecetas.com/wp-content/uploads/2020/09/recetas-de-pasteles.jpg" class="card-img" width="500" height="500"/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">Pasteles</h5>
                        <p class="card-text">Nuestros últimos pasteles</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </section>
        )
    };

        export const ItemContainerPasteleria= () => {
            const [listProducts, setListProducts]= useState([]);
            const [cart, setCart] = useState([])
            let valorStorage= localStorage.carritoStorage;

            console.log(valorStorage)

            function addToCart (product){
                setCart([...cart, product])
                localStorage.setItem('carritoStorage',JSON.stringify (cart))
            }
            
            useEffect( () => {
                async function getDataFromFireStore(){
                    const BD= getFirestore();
                    const COLLETION = BD.collection(`Productos`);
                    const response = await COLLETION.where(`stock`, `>=` , 1).get();
                    const aux = response.docs.map(element => {
                        return {id:element.id, ...element.data()}
                    });
                    setListProducts(aux)
                }
                getDataFromFireStore();
        
            }, [])
            
                return(
                    <section>
                    <h1 className="jumbotron text-center">Pasteles de primera calidad, hecho con productos 100% artesanales</h1>
                
                    <div class="alert alert-warning" role="alert">
                    Has agregado <strong>{cart.length}</strong> productos al carrito. <strong>Finaliza tu compra dirigiendote al Carrito</strong>
                    </div>

                    {
                        listProducts.map(element => {
                         return(
                            <CardProductos name={element.name} price={element.price} img={element.img} description={element.description} stock={element.stock} addToCart={addToCart}/>
                          )
                        })
                    }
                    </section>
                )
            };