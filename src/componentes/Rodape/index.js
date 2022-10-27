import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="logos">
        <img src="/imagens/fb.png" alt="Logo Facebook" />
        <img src="imagens//tw.png" alt="Logo Twitter" />
        <img src="/imagens//ig.png" alt="Logo Instagram" />
      </div>

      <img src="/imagens/logo.png" alt="Organo" />
      <p>Desenvolvido por Felipe Mota</p>
    </footer>
  );
};

export default Rodape;
