import { ContainerCard, H1, P } from "./style.js";

function Cards({ title = "Title", description = "Description" }) {
  return (
    <ContainerCard>
      <H1>{title}</H1>
      <P>{description}</P>
    </ContainerCard>
  );
}
export default Cards;
