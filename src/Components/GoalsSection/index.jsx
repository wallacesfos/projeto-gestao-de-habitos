import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const GoalsSection = ({ goals }) => {
  return (
    <AsideBar>
      <GroupCardSection variant="goals">
        <ul>
          {goals.map(({ title, difficulty, how_much_achieved }, index) => (
            <>
              <Item
                key={index}
                {...{
                  how_much_achieved,
                }}
              >
                <h4> {title}</h4>
                <p>{difficulty}</p>
                <div className="progressBar"></div>
              </Item>
            </>
          ))}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default GoalsSection;
