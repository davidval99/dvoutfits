import React, { Component } from "react";
import './Conformacion.css';

 
class Conformacion extends Component {
  render() {
    return (
      <div className="items">
        <div >
          <ul>
            <div>
              <h1 className="h1">Conformación de la empresa</h1>
            </div>

            <div > 
              <img  className="image-h" src="/images/conformacion.jpg" alt="autor" width="350" height="450" />
            </div>  
          </ul>
        </div>  
        <div className="parrafo-h"> 
          <ul>
            <div >
              <p>
              Comprar un accesorio no debe tener que ver con el dinero, sino con un diseño único, 
              materiales de calidad y una apariencia atractiva en general. <br/><br/>
              Somos Kimberly Herrera y Rosario Jinestay, nos encantan los accesorios. Somos dueñas de nuestra 
              propia propia tienda virtual y podemos adaptar los accesorios al estilo único de las personas 
              de todos los días. <br/><br/>Obtenemos nuestros productos de varios proveedores en los EE. UU., 
              Europa y Asia, lo que nos permite ofrecer precios con una variedad que a menudo cambia con 
              materiales y diseño de la más alta calidad. 
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
 
export default Conformacion;