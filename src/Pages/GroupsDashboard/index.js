import Nav from "../../Components/Nav/index";
import logo from "../../Utils/Assets/logo.png";
import Cards from "../../Components/Cards";
import NewCard from "../../Components/NewCard";
import {
  Container,
  Header,
  PictureContainer,
  InputContainer,
  StyledButton,
  StyledTextField,
  MyGroupsContainer,
  CardsContainer,
} from "./styles";
import { useState } from "react";

export const GroupsDashboard = () => {
  const [groups, setGroups] = useState(false);

  const showPopUp = () => {
    groups ? setGroups(false) : setGroups(true);
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
            <StyledTextField
              variant="outlined"
              placeholder="Digite o nome do seu grupo"
            />
            <StyledButton variant="contained">Pesquisar</StyledButton>
          </InputContainer>
        </Container>
      </Header>
      <MyGroupsContainer>
        <h1>Meus Grupos</h1>
        <CardsContainer>
          <NewCard onClick={showPopUp} />
          <Cards title="lorem" description="lorem" />
          <Cards title="lorem" description="lorem" />
          <Cards title="lorem" description="lorem" />
          <Cards title="lorem" description="lorem" />
        </CardsContainer>
      </MyGroupsContainer>
    </>
  );
};
