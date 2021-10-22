import jwtDecode from "jwt-decode";
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

  const [userIsOnGroup, setIsOntheGroup] = useState(false);

  const getGroup = async (group_id) => {
    let resp = await getSpecificGroup(group_id);
    setCurrentGroup(resp.data);
    console.log(resp);

    return resp;
  };

  const validUser = () => {
    const token = JSON.parse(localStorage.getItem("@Quero_token"));

    const { user_id } = jwtDecode(token);
    const isOnTheGroup = currentGroup.users_on_group.some(
      ({ id }) => id === user_id
    );

    setIsOntheGroup(isOnTheGroup);
    return isOnTheGroup;
  };

  const updateCurrentGroup = (group_id = currentGroup.id) => {
    getGroup(group_id);
    validUser();
  };

  const states = {
    currentGroup,
    updateCurrentGroup,
    userIsOnGroup,
    validUser,
  };

  return (
    <GroupContext.Provider value={states}>{children}</GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
