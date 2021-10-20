import { createContext, useContext, useEffect, useState } from "react";
import { getSpecificGoal } from "../../Utils/endpoints/goals";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [currentGoal, setCurrentGoal] = useState({});

  //   useEffect(() => {
  //     const init = async () => {
  //       await updateCurrentGoal(20);
  //     };
  //     init();
  //   }, []);

  const getGoal = async (goal_id) => {
    let resp = await getSpecificGoal(goal_id);

    setCurrentGoal(resp.data);

    return resp;
  };

  const updateCurrentGoal = (goal_id = currentGoal.id) => getGoal(goal_id);

  const states = {
    currentGoal,
    updateCurrentGoal,
  };

  return <GoalContext.Provider value={states}>{children}</GoalContext.Provider>;
};

const useGoal = () => useContext(GoalContext);

export default useGoal;
