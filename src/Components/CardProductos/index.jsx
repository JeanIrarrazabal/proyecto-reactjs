
import { ButtonComponent } from '../../Components/ItemCount';


export const CardProductos= ({name, price, img, stock, description, addToCart, cart}) => {
    return(  <div className="card-body">
          <img src={img} alt="" width="180px" height="220px" />
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><small class="text-muted"><strong>{description}</strong> </small></p>
          <p className="card-text"><small class="text-muted"><strong>Precio: </strong> ${price} </small></p>
          <p className="card-text"><small class="text-muted"><strong>Stock disponible: </strong> {stock} </small></p>
          <ButtonComponent/> <br />
          <button className="btn btn-success" onClick={() => {addToCart({name, price, img})}}> Comprar</button>
          <hr />
        </div>)
}
