import { SectionBox } from "./styles";
import group_members from "./../../Utils/Assets/group_members.png";
import goal from "./../../Utils/Assets/goal.png";
import event from "./../../Utils/Assets/event.png";
import { useGroup } from "../../Providers/GroupProvider";

const GroupCardSection = ({
  variant,
  children,
  handleCreate,
  notAddButton,
}) => {
  const headerInfo = {
    members: { text: "Membros", img: group_members, color: "#E09CD1" },
    goals: { text: "Metas", img: goal, color: "#B6E09C" },
    activities: { text: "Atividades", img: event, color: "#9CE0CC" },
  };

  const { text, img, color } = headerInfo[variant];

  const { userIsOnGroup } = useGroup();

  return (
    <SectionBox {...{ color }}>
      <div className="headerBox">
        {!notAddButton && !userIsOnGroup && (
          <button onClick={handleCreate}> Adicionar </button>
        )}
        <img src={img} alt="Ícone membros" />
        <h3> {text} </h3>
      </div>
      {children}
    </SectionBox>
  );
};

export default GroupCardSection;
