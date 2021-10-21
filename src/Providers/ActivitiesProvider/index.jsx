import { createContext, useContext, useState } from "react";
import {
  getGroupActivities,
  getSpecificActivity,
} from "../../Utils/endpoints/activities";
import { getSpecificGoal, getGroupGoals } from "../../Utils/endpoints/goals";
import { useGroup } from "../GroupProvider";

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [currentActivity, setCurrentActivity] = useState(null);

  const { currentGroup } = useGroup();
  const [groupActivities, setGroupActivities] = useState(
    currentGroup.activities
  );

  const getActivity = async (activity_id) => {
    let resp = await getSpecificActivity(activity_id);

    setCurrentActivity(resp.data);

    return resp;
  };

  const getAllGroupActivities = async (group_id) => {
    let resp = await getGroupActivities({ group_id });

    setGroupActivities(resp.data.results);

    return resp;
  };

  const updateCurrentActivity = (activity_id = currentActivity.id) =>
    getActivity(activity_id);

  const updateGroupActivities = (group_id = currentGroup.id) =>
    getAllGroupActivities(group_id);

  const resetCurrentActivity = () => setCurrentActivity(null);

  const states = {
    currentActivity,
    groupActivities,
    updateCurrentActivity,
    updateGroupActivities,
    resetCurrentActivity,
  };

  return (
    <ActivitiesContext.Provider value={states}>
      {children}
    </ActivitiesContext.Provider>
  );
};

const useActivity = () => useContext(ActivitiesContext);

export default useActivity;
