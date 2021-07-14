
export const ItemDetail = ({name, price, img}) => {
    return(
      
        <div className="card-body">
          <img src={img} alt="" />
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><small class="text-muted"><strong>Precio: </strong> ${price} </small></p>
          <button className="btn btn-success"> Comprar</button>
          <hr />
        </div>
        

    )
}