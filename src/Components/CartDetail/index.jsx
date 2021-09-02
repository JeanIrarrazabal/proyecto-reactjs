import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export const CartDetail = ({}) => {
  function ClearStorage () { 
    localStorage.clear();
  } 

  let localStorageDataCarrito = []
  localStorageDataCarrito = JSON.parse(localStorage.getItem('Cart'));

  let total =0;
  localStorageDataCarrito?.forEach(element => {
      total= total +  (element.price*element.cantidad)
  })

  function Product () {
    alert('Te estaremos contactando para realizar el despacho. ¡Muchas gracias por su compra!')
  }

  return(  
    <div class="row" style={{ margin: "30px"}}>
      <div class="col-sm-4">
        <div class="card">
          <div id="cardCarrito" class="card-body">
            <h2 class="card-title">Carrito</h2>
            <p class="text-right">Total Carrito: $<span><strong>{total}</strong></span></p>
          </div>
          <form id="formularioContacto">
		    	<h5 class="subtitulos"> Formulario de compra</h5>
		    <div class="form-group">
		        <label for="txtNombre"> Nombre y Apellido</label>
		        <input type="text" id="txtNombre" class="form-control" required placeholder="Juan Perez" ></input>
		    </div>

		    <div class="form-group">

		        <label for="exampleFormControlInput1">Email</label>
	    		<input type="email" class="form-control" id="exampleFormControlInput1" required placeholder="name@example.com"></input>
		    </div>

        <div class="form-group">

        <label for="exampleFormControlInput1">Teléfono</label>
        <input type="tel" class="form-control" id="exampleFormControlInput1"
        pattern = "[9]{1}-[0-9]{8}" required placeholder="9-12345678"></input>
        </div>
	
        <button id="boton-comprar" onClick={() => {Product()}} class="btn btn-success">Terminar Compra</button>
        <button id="boton-vaciar" onClick={() => {ClearStorage()}}class="btn btn-danger">Vaciar</button>

        <p id="recuerdaCompra" class="card-text">Recuerda revisar tus productos antes de finalizar.</p>

		</form>
        </div>
      </div>
  </div>)
} 