import Cards from "../../Components/Cards";
import NewCard from "../../Components/NewCard";
import { PopUpNewGroup } from "../../Components/PopUpNewGroup";
import Header from "../../Components/HeaderDashboard/index";
import { Container, CardsContainer, SearchContainer } from "./styles";
import Search from "../../Components/Search";
import { useEffect, useState } from "react";
import useGroup2 from "../../Providers/groupsProvider";
import { toast } from "react-toastify";
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
  const { currentGroups2, updateCurrentGroups2, setCurrentGroups2 } =
    useGroup2();
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
    await createGroup({ body, token: token }).then((res) => {
      if (res.status === 400) toast.error("Preencha todos os campos");
    });
    updateCurrentSubs();
    updateCurrentGroups2();
  };

  const joinGroup = async (currentId) => {
    const id = currentId;
    const token = JSON.parse(localStorage.getItem("@Quero_token"));
    toast
      .promise(
        subscribeToGroup({
          group_id: id,
          token: token,
        }).then(() => updateCurrentSubs()),
        {
          pending: "Carregando",
          error: "Ocorreu algum erro",
          success: "Você se juntou com sucesso",
        }
      )
      .then(() => updateCurrentGroups2());
  };

  const leaveGroup = async (currentId) => {
    const id = currentId;
    const token = JSON.parse(localStorage.getItem("@Quero_token"));
    toast
      .promise(
        unsubscribeFromGroup({ group_id: id, token: token }).then(() =>
          updateCurrentSubs()
        ),
        {
          pending: "Carregando",
          success: "Você saiu com sucesso",
          error: "Aconteceu algum erro, tente novamente",
        }
      )
      .then(() => updateCurrentGroups2());
  };

  const findGroup = (input) => {
    const filtered = currentGroups2.find(
      (group) => group.name.toLowerCase() === input.toLowerCase()
    );
    filtered && input !== ""
      ? setCurrentGroups2([filtered])
      : toast.error("Grupo não encontrado");
  };

  const findMyGroups = (input) => {
    const filtered = currentSubs.find(
      (group) => group.name.toLowerCase() === input.toLowerCase()
    );
    filtered && input !== ""
      ? setCurrentSubs([filtered])
      : toast.error("Grupo não encontrado");
  };
  return (
    <Container>
      <Header
        showLogo
        showNav
        placeHolder="Digite o nome do seu grupo"
        showLeftCol
        callback={findMyGroups}
        resetFunction={updateCurrentSubs}
        param
      />
      <h1>Meus Grupos</h1>
      <CardsContainer>
        {currentSubs.map((subs, index) => (
          <Cards
            data={subs}
            title={subs.name}
            callbackClose={leaveGroup}
            description={subs.description}
            category={subs.category}
            moreinfo
            moreinfoPlaceholder="Mais informações"
            key={index}
            delet
            edit
          />
        ))}
        <NewCard callback={showPopUp} />
      </CardsContainer>
      {newGroups === true && <PopUpNewGroup callback={createNewGroup} />}
      <h1 style={{ marginBottom: 30 }}>Todos os Grupos</h1>
      <SearchContainer>
        <Search
          callback={findGroup}
          resetFunction={updateCurrentGroups2}
          param
          placeHolder="Digite o nome do grupo que deseja"
        />
      </SearchContainer>
      <CardsContainer>
        {currentGroups2.map((groups, index) => (
          <Cards
            title={groups.name}
            description={groups.description}
            category={groups.category}
            callback={() => joinGroup(groups.id)}
            id={groups.id}
            placeholder="Juntar-se"
            showButton
            key={index}
            moreinfo
            moreinfoPlaceholder="Mais informações"
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
