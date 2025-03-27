import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerSection">
          <h3>Nosotros</h3>
          <p>Acerca de Nosotros</p>
          <p>Sucursales</p>
          <p>Contacto</p>
          <p>Trabaja con Nosotros</p>
          <p>Términos y Condiciones</p>
        </div>

        <div className="footerSection">
          <h3>Información</h3>
          <p>Medios de pago</p>
          <p>Preguntas frecuentes</p>
          <p>Políticas de envío</p>
          <p>Políticas de privacidad</p>
          <p>Políticas de cambio y devolución</p>
          <p>Cómo comprar</p>
          <p>Defensa del Consumidor</p>
          <p>Guía de Talles</p>
        </div>

        <div className="footerSection">
          <h3>Síguenos</h3>
          <div className="socialLinks">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2024 Matías Burd - Proyecto académico sin fines comerciales.</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
