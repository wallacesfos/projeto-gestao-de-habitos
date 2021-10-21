import { TextField } from "@material-ui/core";
import { useState } from "react";
import { ContainerSearch } from "./style.js";
const Search = ({
  callback,
  param,
  variavel,
  setVariavel,
  placeHolder,
  resetFunction,
}) => {
  const [input, setInput] = useState("");
  return (
    <ContainerSearch>
      <div className="Col-input">
        <TextField
          className="Search"
          id="outlined-basic"
          label={placeHolder}
          variant="outlined"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className="Col-button">
        <button className="btn-primary" onClick={() => callback(input)}>
          Pesquisar
        </button>
        {param && (
          <button className="btn-primary" onClick={() => resetFunction(input)}>
            reset
          </button>
        )}
      </div>
    </ContainerSearch>
  );
};

export default Search;
