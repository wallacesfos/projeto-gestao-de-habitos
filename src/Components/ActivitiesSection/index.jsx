import { useState } from "react";
import { DefaultContext } from "react-icons/lib";
import { toast, ToastContainer } from "react-toastify";

import useGoal from "../../Providers/GoalProvider";
import GoalPopupCard from "../GoalPopupCard";
import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const ActivitiesSection = ({ activities }) => {
  const { currentGoal, updateCurrentGoal } = useGoal();

  const deleteToast = () => {
    toast.success("Meta deletada!");
  };

  return (
    <AsideBar>
      <ToastContainer />
      <GroupCardSection variant="activities">
        <ul>
          {activities.map(({ id, title, realization_time }) => {
            const meses = [
              "janeiro",
              "fevereiro",
              "março",
              "abril",
              "maio",
              "junho",
              "julho",
              "agosto",
              "setembro",
              "outubro",
              "novembro",
              "dezembro",
            ];
            const date = new Date(realization_time);
            const formatedDate = `${date.getDate()} de ${
              meses[date.getMonth()]
            } de ${date.getFullYear()}`;

            return (
              <div key={id}>
                <Item
                // onClick={() => updateCurrentGoal(id)}
                // {...{
                //   how_much_achieved,
                // }}
                >
                  <h4> {title}</h4>
                  <p>Prazo: {formatedDate}</p>
                </Item>
                {currentGoal?.id === id && (
                  <GoalPopupCard {...{ deleteToast }} />
                )}
              </div>
            );
          })}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default ActivitiesSection;
