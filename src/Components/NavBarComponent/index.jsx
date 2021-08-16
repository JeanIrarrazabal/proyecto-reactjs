import { CartWidget } from "../CartWidget";

import {Link} from 'react-router-dom';

export const NavBarComponent= () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <CartWidget/>
          <a className="navbar-brand" >Pasteleria Dulce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"><Link to={"/Pasteleria"}> Pasteleria</Link></a>
                </li>    
            </ul>
          </div>
          <input class="form-control me-2" type="search" placeholder="Busca tu producto" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </div>

        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center bg-success rounded-pill">
        <a id="carrito"><Link to={"/Carrito"}>Carrito </Link></a>
        <span id="cantidadDelCarrito" class="badge btn btn-primary rounded-pill"></span>
        </li>
        </ul>
      </nav>
    )
};


