

export function NavbarComponent() {
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Muebles&JPI</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Dormitorio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Cocina</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Baño</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Jardineria</a>
                </li>
                  <button id="carrito" type="button" class="btn btn-success">Mi Carrito</button>
            </ul>
          </div>
        </div>
      </nav>
    )
};
