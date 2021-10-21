import Cards from "../../Components/Cards";
import NewCard from "../../Components/NewCard";
import { PopUpNewGroup } from "../../Components/PopUpNewGroup";
import Header from "../../Components/HeaderDashboard/index";
import { Container, CardsContainer, SearchContainer } from "./styles";
import Search from "../../Components/Search";
import { useEffect, useState } from "react";
import useGroup from "../../Providers/groupsProvider";
import {
  getSubscriptions,
  subscribeToGroup,
  unsubscribeFromGroup,
  createGroup,
} from "../../Utils/endpoints/groups";
import useSubGroup from "../../Providers/currentGroupsProvider";
const token = JSON.parse(localStorage.getItem("@Quero_token"));

export const GroupsDashboard = () => {
  const [newGroups, setNewGroups] = useState(false);
  const { currentGroups, updateCurrentGroups } = useGroup();
  const { currentSubs, updateCurrentSubs, setCurrentSubs } = useSubGroup();

  const showPopUp = () => {
    newGroups === true ? setNewGroups(false) : setNewGroups(true);
  };

  useEffect(() => {
    getSubscriptions(token)
      .then((res) => setCurrentSubs(res.data))
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line

  const createNewGroup = async (body) => {
    await createGroup({ body, token: token });
    updateCurrentGroups();
    updateCurrentSubs();
  };

  const joinGroup = async (currentId) => {
    const id = currentId;
    const token = JSON.parse(localStorage.getItem("@Quero_token"));
    await subscribeToGroup({
      group_id: id,
      token: token,
    });
    updateCurrentSubs();
    updateCurrentGroups();
  };

  const leaveGroup = async (currentId) => {
    const id = currentId;
    const token = JSON.parse(localStorage.getItem("@Quero_token"));
    await unsubscribeFromGroup({ group_id: id, token: token });
    updateCurrentSubs();
    updateCurrentGroups();
  };
  return (
    <Container>
      <Header
        showLogo
        showNav
        placeHolder="Digite o nome do seu grupo"
        showLeftCol
      />
      <h1>Meus Grupos</h1>
      <CardsContainer>
        {currentSubs.map((subs, index) => (
          <Cards
            title={subs.name}
            description={subs.description}
            category={subs.category}
            usersOnGroup={subs.users_on_group.length}
            key={index}
            callback={() => leaveGroup(subs.id)}
            placeholder="Sair do Grupo"
          />
        ))}
        <NewCard callback={showPopUp} />
      </CardsContainer>
      {newGroups === true && <PopUpNewGroup callback={createNewGroup} />}
      <h1 style={{ marginBottom: 30 }}>Todos os Grupos</h1>
      <SearchContainer>
        <Search placeHolder="Digite o nome do grupo que deseja" />
      </SearchContainer>
      <CardsContainer>
        {currentGroups.map((groups) => (
          <Cards
            title={groups.name}
            description={groups.description}
            category={groups.category}
            usersOnGroup={groups.users_on_group.length}
            id={parseInt(groups.id)}
            callback={() => joinGroup(groups.id)}
            placeholder="Juntar-se"
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
