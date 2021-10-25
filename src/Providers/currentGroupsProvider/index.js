import { createContext, useContext, useState } from "react";
import { getSubscriptions } from "../../Utils/endpoints/groups";

const SubsContext = createContext();
const token = JSON.parse(localStorage.getItem("@Quero_token"));

export const SubsProvider = ({ children }) => {
  const [currentSubs, setCurrentSubs] = useState([]);

  const getAllSubs = async () => {
    let resp = await getSubscriptions(token);
    setCurrentSubs(resp.data);
    return resp;
  };

  const updateCurrentSubs = () => getAllSubs();

  const states = {
    currentSubs,
    updateCurrentSubs,
    setCurrentSubs,
  };

  return <SubsContext.Provider value={states}>{children}</SubsContext.Provider>;
};

const useSubGroup = () => useContext(SubsContext);

export default useSubGroup;
