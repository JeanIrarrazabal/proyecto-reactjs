
import { ButtonComponent } from '../../Components/ItemCount';

export const CardProductos= () => {
    return(
        <div className="card-body">
         <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ButtonComponent/> <br />
            <button className="btn btn-success"> Comprar</button>
        </div>
    )
}