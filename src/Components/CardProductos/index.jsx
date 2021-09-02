
import { ButtonComponent } from '../../Components/ItemCount';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export const CardProductos= ({name, price, img, stock, id, description, addToCart}) => {
  let cantidadSolicitada = 0
  function cantidadProducto(cantidadSolicitadaBtn){
      cantidadSolicitada = cantidadSolicitadaBtn;
  }
  
    return(  
<MDBCard style={{ maxWidth: '1200px', margin: "30px"}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>
            {description}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'><strong>Precio: </strong> ${price}</small>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'><strong>Stock disponible: </strong> {stock}</small>
            </MDBCardText>
            <ButtonComponent parentCallback = {cantidadProducto}/> <br />
            <button className="btn btn-success" onClick={() => {let product= {name:name, price:price, img:img, id:id, stock:stock ,cantidad:cantidadSolicitada} 
         addToCart(product)}}> Comprar</button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

        )
}
