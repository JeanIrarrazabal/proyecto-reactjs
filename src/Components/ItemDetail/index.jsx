
export const ItemDetail = ({name, price, img}) => {

    return(  
    <div id="htmlCarrito" class="row">
      <div class="col-sm-4">
        <div class="card">
          <div id="cardCarrito" class="card-body">
            <h2 class="card-title">Carrito</h2>
            <p class="text-right">Cantidad total productos del carrito: <span> <strong id="cantidadCarrito"></strong></span></p>
            <p class="text-right">Total: $<span><strong id="sumaTotalCarrito"></strong></span></p>
          </div>
          <form id="formularioContacto">
		    	<h5 class="subtitulos"> Formulario de compra</h5>
		    <div class="form-group">
		        <label for="txtNombre"> Nombre y Apellido</label>
		        <input type="text" id="txtNombre" class="form-control" placeholder="Juan Perez" ></input>
		    </div>

		    <div class="form-group">

		        <label for="exampleFormControlInput1">Email</label>
	    		<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
		    </div>

        <div class="form-group">

        <label for="exampleFormControlInput1">Teléfono</label>
        <input type="tel" class="form-control" id="exampleFormControlInput1"
        pattern = "[9]{1}-[0-9]{4}-[0-9]{4}" required placeholder="9-1234-5678"></input>
        </div>
	
        <button id="boton-comprar" onclick="llamarDatos()" class="btn btn-success">Terminar Compra</button>
        <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>

        <p id="recuerdaCompra" class="card-text">Recuerda revisar tus productos antes de finalizar.</p>

		</form>
        </div>
      </div>
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