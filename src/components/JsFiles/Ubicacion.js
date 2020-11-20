import React, { Component } from "react";
import '../CssFiles/Ubicacion.css';

 
class Ubicacion extends Component {
  render() {
    return (
      <div className="items">
        <div >
          <ul>
            <div>
              <h1 className="h1">Ubicacion de las tiendas</h1>
            </div>

            <div > 
              <img  className="image-h" src="/images/ubicacion.jpg" alt="autor" width="350" height="450" />
            </div>  
          </ul>
        </div>  
        <div className="parrafo-h"> 
          <ul>
            <div >
              <p>
              Comprar un accesorio no debe tener que ver con el dinero, sino con un diseño único, 
              materiales de calidad y una apariencia atractiva en general. <br/><br/>
              Somos una tienda virtual, por lo tanto hacemos envíos a lo largo y ancho del país. Contamos con nuestro propio mensajero, 
              o bien, podemos hacer los envíos por medio de correos de Costa Rica<br/><br/>
              <br/><br/>
              Si tiene alguna pregunta o comentario, ¡nos encantaría escucharlo!
              </p>
            </div>
          </ul>
        </div>
 </div>
    );
  }
}
 
export default Ubicacion;