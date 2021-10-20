import { createContext, useContext, useEffect, useState } from "react";
import { getSpecificGroup } from "../../Utils/endpoints/groups";

const group = {
  id: 20,
  name: "",
  description: "",
  category: "",
  creator: {
    id: "",
    username: "",
    email: "",
  },
  users_on_group: [],
  goals: [],
  activities: [],
};

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [currentGroup, setCurrentGroup] = useState(group);

  useEffect(() => {
    const init = async () => {
      await updateCurrentGroup(20);
    };
    init();
  }, []);

  const getGroup = async (group_id) => {
    let resp = await getSpecificGroup(group_id);
    setCurrentGroup(resp.data);

    return resp;
  };

  const updateCurrentGroup = (group_id = currentGroup.id) => {
    getGroup(group_id);
  };

  const states = {
    currentGroup,
    updateCurrentGroup,
  };

  return (
    <GroupContext.Provider value={states}>{children}</GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
