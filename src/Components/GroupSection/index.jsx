import { SectionBox } from "./styles";

const GroupCardSection = ({ variant, children }) => {
  const group_members = "";
  const goal = "";
  const event = "";

  const headerInfo = {
    members: { text: "Membros", img: group_members, color: "#E09CD1" },
    goals: { text: "Metas", img: goal, color: "#B6E09C" },
    activities: { text: "Atividades", img: event, color: "#9CE0CC" },
  };

  const { text, img, color } = headerInfo[variant];

  return (
    <SectionBox {...{ color }}>
      <div className="headerBox">
        <img src={img} alt="Ícone membros" />
        <h3> {text} </h3>
      </div>
      {children}
    </SectionBox>
  );
};

export default GroupCardSection;
