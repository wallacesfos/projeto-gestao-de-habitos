import { TextField } from "@material-ui/core";
import { Container, Title, InputsBoxs } from "./style";
import { useState } from "react";

export default function ActivitForm({ handleCreate, setFormMode }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    const data = {
      title: title,
      realization_time: `${date}T15:00:00Z`,
    };

    await handleCreate(data);
    setFormMode(false);
  };

  return (
    <Container>
      <Title>Nova atividade</Title>
      <InputsBoxs>
        <TextField
          label="Título"
          margin="normal"
          className="margin-left-input margin-right-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          margin="normal"
          className="margin-left-input margin-right-input"
          value={date}
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </InputsBoxs>
      <button onClick={handleSubmit} className="btn-primary mini">
        Cadastrar
      </button>
    </Container>
  );
}
