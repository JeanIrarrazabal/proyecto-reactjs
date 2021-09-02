import { ItemDetail } from '../../Components/ItemDetail';
import { CartDetail } from '../../Components/CartDetail';


export const ItemDetailContainer= () => {
    
    let idStorage = JSON.parse(localStorage.getItem('Cart'));

    return(
        
        <section>
            
            <CartDetail/>
        {
            idStorage?.map(element => {
             return(
                <ItemDetail name={element.name} price={element.price} img={element.img} cantidad={element.cantidad}/>
              )
            })
        }
        </section>
    )
};