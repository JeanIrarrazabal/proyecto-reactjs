import { NavBarComponent } from '../../Components/NavBarComponent';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { ItemContainerDormitorio, ItemContainerCocina, ItemContainerBaño, ItemContainerJardineria, ItemContainerInicio} from '../../Containers/ItemListContainer';
import {ItemDetailContainer} from '../../Containers/ItemDetailContainer';
export const HomeContainer= () => {
    return(
            <BrowserRouter>
                <NavBarComponent/>

                <Switch>
                    <Route exact path="/">
                        <ItemContainerInicio/>
                    </Route>

                    <Route exact path="/Cocina">
                        <ItemContainerCocina/>
                    </Route>

                    <Route exact path="/Dormitorio">
                        <ItemContainerDormitorio/>
                    </Route>

                    <Route exact path="/Baño">
                        <ItemContainerBaño/>
                    </Route>

                    <Route exact path="/Jardineria">
                        <ItemContainerJardineria/>
                    </Route>

                    <Route exact path="/Detalle">
                        <ItemDetailContainer/>
                    </Route>

                    <Route path={"*"} component={() => <h1>404</h1>}/>

                </Switch>
            </BrowserRouter>

    )
}