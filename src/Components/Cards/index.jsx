import Close from "../Close/index.jsx";
import { ContainerCard, H1, P } from "./style.js";

function Cards({
  title = "Title",
  description = "Description",
  category = "Category",
  usersOnGroup = 0,
  id,
  callback,
  placeholder,
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
      <P>{category}</P>
      <P>{usersOnGroup}</P>
      <button className="btn-primary" onClick={() => callback()}>
        {placeholder}
      </button>
    </ContainerCard>
  );
}
export default Cards;
