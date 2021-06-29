import { CartWidget } from "../CartWidget";

export const NavBarComponent= () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <CartWidget/>
          <a className="navbar-brand" >Muebles&JPI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">Dormitorio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">Cocina</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">Baño</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">Jardineria</a>
                </li>
                  <button id="carrito" type="button" className="btn btn-success">Mi Carrito</button>
            </ul>
          </div>
        </div>
      </nav>
    )
};


