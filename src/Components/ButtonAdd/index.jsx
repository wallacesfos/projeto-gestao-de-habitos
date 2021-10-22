import { ButtonNew, Container, Conversation } from "./style.js";
export default function ButtonAdd({ callback, param }) {
  return (
    <Container>
      <div className="Container-col">
        <ButtonNew onClick={() => callback(param)}></ButtonNew>
      </div>
      <div className="Container-col">
        <Conversation>Adicionar Hábito!</Conversation>
      </div>
    </Container>
  );
}
