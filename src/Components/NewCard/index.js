import { ContainerCard } from "./styles.js";

function NewCard({ callback }) {
  return <ContainerCard onClick={callback}></ContainerCard>;
}
export default NewCard;
