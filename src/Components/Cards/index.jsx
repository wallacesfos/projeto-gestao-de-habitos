import Close from "../Close/index.jsx";
import { ContainerCard, H1, P } from "./style.js";

function Cards({
  title = "Title",
  description = "Description",
  category = "Category",
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
  moreinfo,
  moreinfoPlaceholder,
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
      {showButton && (
        <button
          className="btn-primary"
          style={{ marginBottom: 20 }}
          onClick={() => callback()}
        >
          {placeholder}
        </button>
      )}
      {moreinfo && (
        <button className="btn-primary" onClick={() => callback()}>
          {moreinfoPlaceholder}
        </button>
      )}
    </ContainerCard>
  );
}
export default Cards;
