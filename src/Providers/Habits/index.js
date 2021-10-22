import { getHabits } from "../../Utils/endpoints/habits";
import { createContext, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const loadHabits = async () => {
    const token = JSON.parse(localStorage.getItem("@Quero_token"));
    const resp = await getHabits(token);
    setHabits(resp.data);
  };
  return (
    <HabitsContext.Provider value={{ loadHabits, habits, setHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
