
import { ButtonComponent } from '../../Components/ItemCount';


export const CardProductos= ({name, price, img, stock}) => {
    return(
      
        <div className="card-body">
          <img src={img} alt="" />
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><small class="text-muted"><strong>Precio: </strong> ${price} </small></p>
          <p className="card-text"><small class="text-muted"><strong>Stock disponible: </strong> {stock} </small></p>
          <ButtonComponent/> <br />
          <button className="btn btn-success"> Comprar</button>
          <hr />
        </div>
        

    )
}