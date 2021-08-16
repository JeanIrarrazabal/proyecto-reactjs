import { NavBarComponent } from '../../Components/NavBarComponent';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { ItemContainerInicio, ItemContainerPasteleria} from '../../Containers/ItemListContainer';
import {ItemDetailContainer} from '../../Containers/ItemDetailContainer';
export const HomeContainer= () => {
    return(
            <BrowserRouter>
                <NavBarComponent/>

                <Switch>
                    <Route exact path="/">
                        <ItemContainerInicio/>
                    </Route>

                    <Route exact path="/Pasteleria">
                        <ItemContainerPasteleria/>
                    </Route>

                    <Route exact path="/Carrito">
                        <ItemDetailContainer/>
                    </Route>

                    <Route path={"*"} component={() => <h1>404</h1>}/>

                </Switch>
            </BrowserRouter>

    )
}