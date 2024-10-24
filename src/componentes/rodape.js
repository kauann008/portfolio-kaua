export function Rodape(props) {
  return (
    <footer className="footer">
      <p>&copy; 2024 {props.nome}. Todos os direitos reservados.</p>
      <div className="social-links">
        <a href={props.linkGithub} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={props.linkLinkedin}>LinkedIn</a>
        <a href={`mailto:${props.email}`}>Email</a>
      </div>
    </footer>
  );
}
