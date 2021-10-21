import { TextField } from "@material-ui/core";
import { Container, Title, InputsBoxs } from "./style";
import { useState } from "react";

export default function GolsForm({ handleSubmit }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [percentage, setPercentage] = useState(0);

  const data = {
    title: title,
    difficulty: difficulty,
    how_much_achieved: percentage,
  };

  return (
    <Container>
      <Title>Cadastrar nova meta</Title>
      <InputsBoxs>
        <TextField
          label="Título"
          margin="normal"
          className="margin-left-input margin-right-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Dificuldade"
          margin="normal"
          className="margin-left-input margin-right-input"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />

        <TextField
          label="Porcentagem alcançada"
          margin="normal"
          className="margin-left-input margin-right-input"
          value={percentage}
          type="number"
          onChange={(e) => setPercentage(e.target.value)}
        />
      </InputsBoxs>
      <button className="btn-primary mini">Cadastrar</button>
    </Container>
  );
}
