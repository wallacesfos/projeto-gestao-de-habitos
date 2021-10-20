import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import useGoal from "../../Providers/GoalProvider";
import GoalPopupCard from "../GoalPopupCard";
import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const GoalsSection = ({ goals }) => {
  const { currentGoal, updateCurrentGoal } = useGoal();

  const deleteToast = () => {
    toast.success("Meta deletada!");
  };

  return (
    <AsideBar>
      <ToastContainer />
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
              {currentGoal?.id === id && <GoalPopupCard {...{ deleteToast }} />}
            </div>
          ))}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default GoalsSection;
