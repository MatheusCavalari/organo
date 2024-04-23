import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  
  const aoSelecionado = (evento) =>{
    props.aoAlterado(evento.target.value)
  };

  console.log(props);
  return (
    <div className="lista-suspensa">
      <label> {props.label} </label>
      <select 
      required={props.obrigatorio}
      onChange={aoSelecionado}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
