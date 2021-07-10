import { NavBarComponent } from '../../Components/NavBarComponent';
import { ItemContainer } from '../../Containers/ItemListContainer';

export const HomeContainer= () => {
    return(
        <section>
            <NavBarComponent/>
            <ItemContainer greeting={`Bienvenido al mundo de la carpinteria artesanal`}/>
        </section>
    )
}