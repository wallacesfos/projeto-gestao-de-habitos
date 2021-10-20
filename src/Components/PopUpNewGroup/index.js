import { Container } from "./styles";
import { NewInput } from "../Input";

export const PopUpNewGroup = () => {
  return (
    <Container>
      <h3>Cadastrar Grupo</h3>
      <NewInput width="200" height="50" placeholder="Nome do Grupo" />
      <NewInput width="200" height="50" placeholder="Descrição" />
      <NewInput width="200" height="50" placeholder="Categoria" />
      <button className="btn-primary btn-primary">Cadastrar</button>
    </Container>
  );
};
