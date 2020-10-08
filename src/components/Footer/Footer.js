import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css"

export const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Gerenciamento de Funcionários</h5>
            <p>
              Nossa missão é auxiliar no processo de gerenciamento de funcionários através de uma plataforma amigável, rápida e eficiente.
              Fique à vontade para nos escrever e buscar mais informações mediante nossas redes.
              
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Redes</h5>
             <ul>
              <li className="list-unstyled">
                <a href="#!">
                  <i className="fab fa-facebook fa-2x fa-lg"></i>
                </a>
              </li>
              <br></br>
              <li className="list-unstyled">
                <a href="#!">
                  <i className="fab fa-instagram fa-2x fa-lg"></i>
                </a>
              </li>              
            </ul>
            <img id="logo" src="https://3lminformatica.com.br/site/wp-content/themes/3lm-theme/assets/images/3lmlogo.png" alt="Logo"/>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
