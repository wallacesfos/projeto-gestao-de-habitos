import { TextField } from "@material-ui/core";
import { ContainerSearch } from "./style.js";
export default function Search({
  callback,
  param,
  variavel,
  setVariavel,
  placeHolder,
}) {
  return (
    <ContainerSearch>
      <div className="Col-input">
        <TextField
          className="Search"
          id="outlined-basic"
          label={placeHolder}
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
