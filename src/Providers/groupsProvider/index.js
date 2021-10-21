import { createContext, useContext, useEffect, useState } from "react";
import { getGroups } from "../../Utils/endpoints/groups";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  useEffect(() => {
    getGroups().then((res) => setCurrentGroups(res.data.results));
  }, []);
  const [currentGroups, setCurrentGroups] = useState([]);

  const getAllGroups = async () => {
    let counter = 1;
    const resp = await getGroups(counter);
    setCurrentGroups(...currentGroups, resp.data.results);

    return resp;
  };

  const updateCurrentGroups = () => getAllGroups();

  const states = {
    currentGroups,
    updateCurrentGroups,
    setCurrentGroups,
  };

  return (
    <GroupContext.Provider value={states}>{children}</GroupContext.Provider>
  );
};

const useGroup = () => useContext(GroupContext);

export default useGroup;
