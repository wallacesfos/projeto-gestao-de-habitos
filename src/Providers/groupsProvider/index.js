import { createContext, useContext, useEffect, useState } from "react";
import { getGroups } from "../../Utils/endpoints/groups";

const GroupContext2 = createContext();

export const GroupProvider2 = ({ children }) => {
  useEffect(() => {
    getGroups().then((res) => setCurrentGroups2(res.data.results));
  }, []);
  const [currentGroups2, setCurrentGroups2] = useState([]);

  const getAllGroups2 = async () => {
    const resp = await getGroups();
    setCurrentGroups2(resp.data.results);
    return resp;
  };

  const updateCurrentGroups2 = () => getAllGroups2();

  const states = {
    currentGroups2,
    updateCurrentGroups2,
    setCurrentGroups2,
  };

  return (
    <GroupContext2.Provider value={states}>{children}</GroupContext2.Provider>
  );
};

const useGroup2 = () => useContext(GroupContext2);

export default useGroup2;
