import { TextField } from "@material-ui/core";
import { Container } from "./style.js";
import {} from "./style.js";
export default function FormAddHabits({
  callback,
  param,
  titleHabit,
  setTitleHabit,
  categoryHabit,
  setCategoryHabit,
  difficultyHabit,
  setDifficultyHabit,
  frequencyHabit,
  setFrequencyHabit,
}) {
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
          onChange={(e) => setTitleHabit(e.target.value)}
          value={titleHabit}
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
          onChange={(e) => setFrequencyHabit(e.target.value)}
          value={frequencyHabit}
        />
      </li>
      <li>
        <button onClick={() => callback(param)} className="btn-primary">
          Cadastrar
        </button>
      </li>
    </Container>
  );
}
