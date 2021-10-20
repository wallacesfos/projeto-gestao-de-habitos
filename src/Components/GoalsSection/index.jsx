import { useState } from "react";
import GoalPopupCard from "../GoalPopupCard";
import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const GoalsSection = ({ goals }) => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <AsideBar>
      <GroupCardSection variant="goals">
        <ul>
          {goals.map(({ title, difficulty, how_much_achieved, id }) => (
            <div key={id}>
              <Item
                onClick={() => setCurrentId(id)}
                {...{
                  how_much_achieved,
                }}
              >
                <h4> {title}</h4>
                <p>{difficulty}</p>
                <div className="progressBar"></div>
              </Item>
              {currentId === id && (
                <GoalPopupCard
                  {...{
                    goal_id: id,
                    setCloseState: setCurrentId,
                    closeValue: null,
                  }}
                />
              )}
            </div>
          ))}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default GoalsSection;
