import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="logos">
        <img src="/fb.png" alt="Logo Facebook" />
        <img src="/tw.png" alt="Logo Twitter" />
        <img src="/ig.png" alt="Logo Instagram" />
      </div>

      <img src="/logo.png" alt="Organo" />
      <p>Desenvolvido por Felipe Mota</p>
    </footer>
  );
};

export default Rodape;
