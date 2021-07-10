import { NavBarComponent } from '../../Components/NavBarComponent';
import { ItemContainer } from '../../Components/ItemListContainer';

export const HomeContainer= () => {
    return(
        <section>
            <NavBarComponent/>
            <ItemContainer greeting={`Bienvenido al mundo de la carpinteria artesanal`}/>
        </section>
    )
}