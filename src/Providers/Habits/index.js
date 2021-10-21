import { getHabits } from "../../Utils/endpoints/habits";
import { createContext, useEffect, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const loadHabits = async () => {
    //   JSON.parse(localStorage.getItem("@Doit:token")) JSON.stringify(token)
    const token = JSON.parse(localStorage.getItem("@token"));
    const resp = await getHabits(token);
    setHabits(resp.data);
  };
  return (
    <HabitsContext.Provider value={{ loadHabits, habits, setHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
