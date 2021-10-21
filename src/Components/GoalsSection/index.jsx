import jwtDecode from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";

import useGoal from "../../Providers/GoalProvider";
import { useGroup } from "../../Providers/GroupProvider";
import { createGoal } from "../../Utils/endpoints/goals";
import GoalPopupCard from "../GoalPopupCard";
import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const GoalsSection = ({ goals }) => {
  const { currentGoal, updateCurrentGoal, updateGroupGoals } = useGoal();
  const { currentGroup } = useGroup();
  const token = JSON.parse(localStorage.getItem("@Quero_token"));

  const deleteToast = () => {
    toast.success("Meta deletada!");
  };

  const handleCreate = async () => {
    const body = {
      title: "Estudar Material-UI loucamente",
      difficulty: "médio",
      how_much_achieved: 0,
      group: currentGroup.id,
    };

    const resp = await createGoal({ body, token });

    if (resp.status === 201) {
      toast.success("Meta criada!");
    }

    updateGroupGoals();
  };

  return (
    <AsideBar>
      <ToastContainer />
      <GroupCardSection variant="goals" {...{ handleCreate }}>
        <ul>
          {goals.length === 0 && (
            <Item key="1">
              <p className="empty">Vazio</p>
            </Item>
          )}
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
