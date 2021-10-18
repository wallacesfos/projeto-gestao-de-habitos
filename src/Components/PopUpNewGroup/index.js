import { Container } from "./styles";
import { NewInput } from "../Input";
import { NewButton } from "../Button";

export const PopUpNewGroup = () => {
  return (
    <Container>
      <h3>Cadastrar Grupo</h3>
      <NewInput width="200" height="50" placeholder="Nome do Grupo" />
      <NewInput width="309" height="50" placeholder="Descrição" />
      <NewInput width="200" height="50" placeholder="Categoria" />
      <NewButton innerText="Cadastrar" />
    </Container>
  );
};
