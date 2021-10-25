import { useState } from "react";
import { useHistory } from "react-router";
import { useGroup } from "../../Providers/GroupProvider/index.js";
import Close from "../Close/index.jsx";
import PopupScreen from "../PopupScreen/index.jsx";
import { ContainerCard, H1, P } from "./style.js";

function Cards({
  title = "Title",
  description = "Description",
  category = "",
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
  const { updateCurrentGroup } = useGroup();

  const [showPopupCard, setShowPoppupCard] = useState(false);
  const history = useHistory();

  const handleMoreInfo = async () => {
    await updateCurrentGroup(id);
    history.push("/group-page");
  };

  const limitDescription =
    description.length > 30
      ? description.substring(0, 20) + "..."
      : description;

  const limitTitle = title.length > 16 ? title.substring(0, 12) + "..." : title;

  const limitCategory =
    category.length > 16 ? category.substring(0, 12) + "..." : category;
  return (
    <>
      {showPopupCard && <PopupScreen setCloseState={setShowPoppupCard} />}
      <ContainerCard>
        {edit && (
          <Close edit param={param} callback={() => callbackEdit(data)} />
        )}
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
          <button className="btn-primary" onClick={handleMoreInfo}>
            {moreinfoPlaceholder}
          </button>
        )}
      </ContainerCard>
    </>
  );
}
export default Cards;
