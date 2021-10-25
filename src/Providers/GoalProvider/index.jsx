import { createContext, useContext, useState } from "react";
import { getSpecificGoal, getGroupGoals } from "../../Utils/endpoints/goals";
import { useGroup } from "../GroupProvider";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [currentGoal, setCurrentGoal] = useState(null);

  const { currentGroup } = useGroup();
  const [groupGoals, setGroupGoals] = useState(currentGroup.goals);

  const getGoal = async (goal_id) => {
    let resp = await getSpecificGoal(goal_id);

    setCurrentGoal(resp.data);

    return resp;
  };

  const getAllGroupGoals = async (group_id) => {
    let resp = await getGroupGoals({ group_id });

    setGroupGoals(resp.data.results);

    return resp;
  };

  const updateCurrentGoal = (goal_id = currentGoal.id) => getGoal(goal_id);

  const updateGroupGoals = (group_id = currentGroup.id) =>
    getAllGroupGoals(group_id);

  const resetCurrentGoal = () => setCurrentGoal(null);

  const states = {
    currentGoal,
    groupGoals,
    updateCurrentGoal,
    updateGroupGoals,
    resetCurrentGoal,
  };

  return <GoalContext.Provider value={states}>{children}</GoalContext.Provider>;
};

const useGoal = () => useContext(GoalContext);

export default useGoal;
