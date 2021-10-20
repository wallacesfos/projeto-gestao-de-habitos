import Cards from "../../Components/Cards";
import NewCard from "../../Components/NewCard";
import { PopUpNewGroup } from "../../Components/PopUpNewGroup";
import Header from "../../Components/HeaderDashboard/index";
import { Container, CardsContainer, SearchContainer } from "./styles";
import Search from "../../Components/Search";
import { useEffect, useState } from "react";
import { getSubscriptions } from "../../Utils/endpoints/groups";

export const GroupsDashboard = () => {
  const [newGroups, setNewGroups] = useState(false);

  const showPopUp = () => {
    newGroups === true ? setNewGroups(false) : setNewGroups(true);
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
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <NewCard callback={showPopUp} />
      </CardsContainer>
      {newGroups === true && <PopUpNewGroup />}
      <h1 style={{ marginBottom: 30 }}>Todos os Grupos</h1>
      {/* <Header placeHolder="Digite o nome do grupo que deseja" /> */}
      <SearchContainer>
        <Search placeHolder="Digite o nome do grupo que deseja" />
      </SearchContainer>
      <CardsContainer>
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
        <Cards title="lorem" description="lorem" />
      </CardsContainer>
    </Container>
  );
};
