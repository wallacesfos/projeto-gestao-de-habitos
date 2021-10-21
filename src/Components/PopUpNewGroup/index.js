import { Container } from "./styles";
import { NewInput } from "../Input";
import { useState } from "react";

export const PopUpNewGroup = ({ callback }) => {
  const [useName, setUsename] = useState("");
  const [useDescription, setUseDescription] = useState("");
  const [useCategory, setUseCategory] = useState("");
  const body = {
    name: useName,
    description: useDescription,
    category: useCategory,
  };

  return (
    <Container>
      <h3 style={{ marginBottom: 1.5 }}>Cadastrar Grupo</h3>
      <NewInput
        width="200"
        height="50"
        placeholder="Nome do Grupo"
        value={useName}
        onChange={(e) => setUsename(e.target.value)}
      />
      <NewInput
        width="200"
        height="50"
        placeholder="Descrição"
        value={useDescription}
        onChange={(e) => setUseDescription(e.target.value)}
      />
      <NewInput
        width="200"
        height="50"
        placeholder="Categoria"
        value={useCategory}
        onChange={(e) => setUseCategory(e.target.value)}
      />
      <button
        className="btn-primary btn-primary"
        onClick={() => callback(body)}
      >
        Cadastrar
      </button>
    </Container>
  );
};
