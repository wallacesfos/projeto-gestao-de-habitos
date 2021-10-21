import { TextField } from "@material-ui/core";
import {
  BackdropContainer,
  Container,
  Title,
  InputsBoxs,
  ButtonBox,
} from "./style";
import { useState } from "react";

export default function ActivitForm({ handleCreate, setFormMode }) {
  const [title, setTitle] = useState("");

  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  const hoje = `${ano}-${mes}-${dia}`;

  const [date, setDate] = useState(hoje);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      realization_time: `${date}T15:00:00Z`,
    };

    await handleCreate(data);
    setFormMode(false);
  };

  return (
    <BackdropContainer>
      <Container as="form" onSubmit={handleSubmit}>
        <Title>Nova Atividade</Title>
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
            label="Prazo - MM/DD/AAAA"
            type="date"
            margin="normal"
            className="margin-left-input margin-right-input"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
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
