import { TextField } from "@material-ui/core";
import {
  BackdropContainer,
  Container,
  Title,
  InputsBoxs,
  ButtonBox,
} from "./style";
import { useState } from "react";

export default function GolsForm({ handleCreate, setFormMode }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [percentage, setPercentage] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: percentage,
    };

    await handleCreate(data);
    setFormMode(false);
  };

  return (
    <BackdropContainer>
      <Container as="form" onSubmit={handleSubmit}>
        <Title>Nova Meta</Title>
        <InputsBoxs>
          <TextField
            required
            label="Título"
            margin="normal"
            className="margin-left-input margin-right-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            required
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
        <ButtonBox>
          <button type="submit" className="btn-primary mini">
            Cadastrar
          </button>
          <button
            onClick={() => setFormMode(false)}
            className="btn-primary mini cancel"
          >
            Cancelar
          </button>
        </ButtonBox>
      </Container>
    </BackdropContainer>
  );
}
