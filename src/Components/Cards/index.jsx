import Close from "../Close/index.jsx";
import { ContainerCard, H1, P } from "./style.js";

function Cards({
  title = "Title",
  description = "Description",
  callbackClose,
  callbackEdit,
  param,
  data,
}) {
  return (
    <ContainerCard>
      <Close edit param={param} callback={() => callbackEdit(data)} />
      <Close delet param={param} callback={() => callbackClose(data.id)} />
      <H1>{title}</H1>
      <P>{description}</P>
    </ContainerCard>
  );
}
export default Cards;
