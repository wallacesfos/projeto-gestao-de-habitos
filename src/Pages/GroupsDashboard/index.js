import Nav from "../../Components/Nav/index";
import logo from "../../Utils/Assets/logo.png";
import Cards from "../../Components/Cards";
import NewCard from "../../Components/NewCard";
import { NewButton } from "../../Components/Button";
import { NewInput } from "../../Components/Input";
import { PopUpNewGroup } from "../../Components/PopUpNewGroup";
import {
  Container,
  Header,
  PictureContainer,
  InputContainer,
  MyGroupsContainer,
  CardsContainer,
  Footer,
} from "./styles";
import { useState } from "react";

export const GroupsDashboard = () => {
  const [groups, setGroups] = useState(false);

  const showPopUp = () => {
    groups === true ? setGroups(false) : setGroups(true);
  };
  return (
    <>
      <Header>
        <PictureContainer>
          <img src={logo} alt="logo" />
        </PictureContainer>
        <Container>
          <Nav dashboard />
          <InputContainer>
            <NewInput
              placeholder="Digite o nome do seu grupo"
              height="35"
              width="550"
            />
            <NewButton variant="contained" innerText="Pesquisar" />
          </InputContainer>
        </Container>
      </Header>
      <MyGroupsContainer>
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
      </MyGroupsContainer>
      <MyGroupsContainer>
        <Header>
          <InputContainer>
            <NewInput
              placeholder="Digite o nome do seu grupo"
              height="35"
              width="550"
            />
            <NewButton variant="contained" innerText="Pesquisar" />
          </InputContainer>
        </Header>
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
        <Footer>
          <PictureContainer>
            <img src={logo} alt="logo" />
          </PictureContainer>
          <Nav dashboard />
        </Footer>
      </MyGroupsContainer>
    </>
  );
};
