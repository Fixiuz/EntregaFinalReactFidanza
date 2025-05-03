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
          
          <h4 className="grid-title">Stack Tecnológico</h4>

          <ul className='stack-grid'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Sass / SCSS</li>
            <li>Next.js</li>
            <li>Firebase</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="footer-tools">
          <h4 className="grid-title">Herramientas</h4>
          <ul className="tools-grid">
            <li>Visual Studio Code</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Trello</li>
            <li>Figma</li>
            <li>npm / yarn</li>
            <li>Git / GitHub</li>
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
