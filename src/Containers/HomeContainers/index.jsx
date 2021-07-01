import { NavBarComponent } from '../../Components/NavBarComponent';
import { ItemContainer } from '../../Components/ItemListContainer';
import { CardProductos } from '../../Components/CardProductos'

export const HomeContainer= () => {
    return(
        <div>
            <NavBarComponent/>
            <ItemContainer greeting={`Bienvenido al mundo de la carpinteria artesanal`}/>
            <CardProductos/>
        </div>
    )
}