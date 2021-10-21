import Close from "../Close/index.jsx";
import { ContainerCard, H1, P } from "./style.js";

function Cards({
  title = "Title",
  description = "Description",
  button,
  callback,
  param,
}) {
  return (
    <ContainerCard>
      <Close param={param} callback={callback} />
      <H1>{title}</H1>
      <P>{description}</P>
    </ContainerCard>
  );
}
export default Cards;
