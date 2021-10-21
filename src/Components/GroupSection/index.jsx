import { SectionBox } from "./styles";
import group_members from "./../../Utils/Assets/group_members.png";
import goal from "./../../Utils/Assets/goal.png";
import event from "./../../Utils/Assets/event.png";
import { useGroup } from "../../Providers/GroupProvider";
import GolsForm from "../GolsForm";
import ActivitForm from "../ActivitForm";
import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

const GroupCardSection = ({
  variant,
  children,
  handleCreate,
  notAddButton,
  handleSubmit,
}) => {
  const [formMode, setFormMode] = useState(false);

  const headerInfo = {
    members: { text: "Membros", img: group_members, color: "#E09CD1" },
    goals: { text: "Metas", img: goal, color: "#B6E09C", FormField: GolsForm },
    activities: {
      text: "Atividades",
      img: event,
      color: "#9CE0CC",
      FormField: ActivitForm,
    },
  };

  const { text, img, color, FormField } = headerInfo[variant];

  const { userIsOnGroup } = useGroup();

  return (
    <SectionBox {...{ color }}>
      <div className="headerBox">
        {formMode && <FormField {...{ handleCreate, setFormMode }} />}
        <img src={img} alt="Ícone membros" />
        <h3> {text} </h3>
        {variant === "members" && <img src={img} alt="Ícone membros" />}
        {!notAddButton && !userIsOnGroup && (
          // <button onClick={() => setFormMode(true)}> Adicionar </button>
          <RiAddCircleLine
            onClick={() => setFormMode(true)}
            className="AddButton"
          />
        )}
      </div>
      {children}
    </SectionBox>
  );
};

export default GroupCardSection;
