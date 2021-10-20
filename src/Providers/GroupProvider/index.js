import { createContext, useContext, useEffect, useState } from "react";
import { getSpecificGroup } from "../../Utils/endpoints/groups";

const group = {
  id: 20,
  name: "Grupo novo muito louco",
  description: "Descrição",
  category: "Teste",
  creator: {
    id: 14,
    username: "asdf",
    email: "MaisUmTeste@gmail.com",
  },
  users_on_group: [
    {
      id: 14,
      username: "asdf",
      email: "MaisUmTeste@gmail.com",
    },
    {
      id: 40,
      username: "poketester",
      email: "poketeste@gmail.com",
    },
    {
      id: 120,
      username: "nvouser74",
      email: "novimuser@hothot.com",
    },
  ],
  goals: [
    {
      id: 144,
      title:
        "Nenhuma falta na academia cometida pelos membros do grupo na semana",
      difficulty: "Díficil",
      achieved: false,
      how_much_achieved: 100,
      group: 20,
    },
    {
      id: 136,
      title:
        "Nenhuma falta na academia cometida pelos membros do grupo na semana",
      difficulty: "Fácil",
      achieved: false,
      how_much_achieved: 50,
      group: 20,
    },
  ],
  activities: [
    {
      id: 192,
      title: "Crossfit",
      realization_time: "2021-03-10T15:00:00Z",
      group: 20,
    },
  ],
};

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [currentGroup, setCurrentGroup] = useState(group);

  useEffect(() => {
    updateCurrentGroup(20);
  }, []);

  const getGroup = async (group_id = currentGroup.id) => {
    let resp = {};
    await getSpecificGroup(group_id)
      .then(({ data }) => {
        setCurrentGroup(data);
        resp = data;
      })
      .catch((err) => console.log(err.response));

    return resp;
  };

  const updateCurrentGroup = (group_id) => {
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
