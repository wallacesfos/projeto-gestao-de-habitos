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
  edit,
  delet,
  showButton,
}) {
  return (
    <ContainerCard>
      {edit && <Close edit param={param} callback={() => callbackEdit(data)} />}
      {delet && (
        <Close delet param={param} callback={() => callbackClose(data.id)} />
      )}

      <H1>{title}</H1>
      <P>{description}</P>
      <P>{category}</P>
      <P>{usersOnGroup}</P>
      {showButton && (
        <button className="btn-primary" onClick={() => callback()}>
          {placeholder}
        </button>
      )}
    </ContainerCard>
  );
}
export default Cards;
