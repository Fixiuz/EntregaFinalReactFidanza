import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-info">
          <h3>Julio Fidanza</h3>
          <p>Desarrollador Frontend Freelance especializado en React.</p>
        </div>

        <div className="footer-stack">
          <h4>Stack Tecnológico</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="footer-tools">
          <h4>Herramientas</h4>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Firebase</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Julio Fidanza. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
