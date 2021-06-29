import { NavBarComponent } from '../../Components/NavBarComponent';
import { ItemContainer } from '../../Components/ItemListContainer';

export const HomeContainer= () => {
const carrito= [];
    return(
        <div>
            <NavBarComponent cart={carrito}/>
            <ItemContainer greeting={`Hola!! estoy saludando para cumplir el desafio`}/>
        </div>
    )
}