import Cards from "../../Components/Cards";
import NewCard from "../../Components/NewCard";
import { PopUpNewGroup } from "../../Components/PopUpNewGroup";
import Header from "../../Components/HeaderDashboard/index";
import { Container, CardsContainer } from "./styles";
import { useState } from "react";

export const GroupsDashboard = () => {
  const [groups, setGroups] = useState(false);

  const showPopUp = () => {
    groups === true ? setGroups(false) : setGroups(true);
  };
  return (
    <Container>
      <Header />
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
      {groups === true && <PopUpNewGroup />}
      <Header />
      <h1>Todos os Grupos</h1>
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
