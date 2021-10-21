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
  const limitDescription =
    description.length > 30
      ? description.substring(0, 26) + "..."
      : description;

  const limitTitle = title.length > 16 ? title.substring(0, 12) + "..." : title;

  const limitCategory =
    category.length > 16 ? category.substring(0, 12) + "..." : category;
  return (
    <ContainerCard>
      {edit && <Close edit param={param} callback={() => callbackEdit(data)} />}
      {delet && (
        <Close delet param={param} callback={() => callbackClose(data.id)} />
      )}

      <H1>{limitTitle}</H1>
      <P>{limitDescription}</P>
      <P>{limitCategory}</P>
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
