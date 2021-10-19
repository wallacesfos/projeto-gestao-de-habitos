import { TextField } from "@material-ui/core";
import { ContainerSearch } from "./style.js";
export default function Search({ callback, param, variavel, setVariavel }) {
  return (
    <ContainerSearch>
      <div className="Col-input">
        <TextField
          className="Search"
          id="outlined-basic"
          label="Digite o nome do habito..."
          variant="outlined"
        />
      </div>
      <div className="Col-button">
        <button className="btn-primary" onClick={() => callback(variavel)}>
          Pesquisar
        </button>
      </div>
    </ContainerSearch>
  );
}
