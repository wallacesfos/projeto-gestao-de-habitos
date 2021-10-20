import { TextField } from "@material-ui/core";
import { Container } from "./style.js";
import {} from "./style.js";
export default function FormAddHabits() {
  return (
    <Container>
      <li className="title">
        <h4>Cadastro Hábitos</h4>
      </li>
      <li>
        <TextField
          className="input"
          id="outlined-required"
          variant="outlined"
          size="small"
          color="primary"
          margin="normal"
          label="Título"
        />
      </li>
      <li>
        <TextField
          className="input"
          id="outlined-required"
          variant="outlined"
          size="small"
          color="primary"
          margin="normal"
          label="Categoria"
        />
      </li>
      <li>
        <TextField
          className="input"
          id="outlined-required"
          variant="outlined"
          size="small"
          color="primary"
          margin="normal"
          label="Nível de dificulade"
        />
      </li>
      <li>
        <TextField
          className="input"
          id="outlined-required"
          variant="outlined"
          size="small"
          color="primary"
          margin="normal"
          label="Frequência"
        />
      </li>
    </Container>
  );
}
