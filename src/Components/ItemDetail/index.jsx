export const ItemDetail = ({name, price, img, cantidad}) => {
  
    return(  
    <div id="htmlCarrito" class="row">
      <div class="col-sm-7">
        <div class="card">
          <div class="card-body">
            <main id="itemsCarrito"></main>
            
            <div id="CardsItem" class="container">
              <div class="row">
                <main id="items" class="col-sm-8 row"></main>

                  <div class="col-sm-12">
                      <br></br>
                      <div class="toast-header">
                          <div class="row">
                          <div class="col-md-4">
                            <img class="foto"src={img} class="card-img" alt="" width="140px" height="140px"/>
                          </div>
                          <div class="col-md-8">
                        <div class="card-body">
                          <p class="card-text">{name}</p>
                          <p><small id="carrito"> Precio del producto $ {price}</small></p>
                          <p><small id="carrito"> Cantidad Solicitada $ {cantidad}</small></p>
                        </div>
                      </div>
                  </div>
                 <hr></hr>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
  </div>)
} 