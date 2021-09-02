import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export const ItemDetail = ({name, price, img, cantidad}) => {
  
    return( 
  <MDBCard style={{ maxWidth: '500px', margin: "30px"}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>
              <small className='text-muted'><strong>Precio: </strong> ${price}</small>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'><strong>Cantidad Solicitada </strong>{cantidad}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>)
} 