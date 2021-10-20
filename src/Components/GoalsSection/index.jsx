import { useState } from "react";
import useGoal from "../../Providers/GoalProvider";
import GoalPopupCard from "../GoalPopupCard";
import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const GoalsSection = ({ goals }) => {
  const { currentGoal, updateCurrentGoal } = useGoal();

  return (
    <AsideBar>
      <GroupCardSection variant="goals">
        <ul>
          {goals.map(({ title, difficulty, how_much_achieved, id }) => (
            <div key={id}>
              <Item
                onClick={() => updateCurrentGoal(id)}
                {...{
                  how_much_achieved,
                }}
              >
                <h4> {title}</h4>
                <p>{difficulty.toUpperCase()}</p>
                <div className="progressBar"></div>
              </Item>
              {currentGoal?.id === id && <GoalPopupCard />}
            </div>
          ))}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default GoalsSection;
