import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt="Foto do colaborador"></img>
      </div>

      <div className="cargonome">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
