import Nav from "../../Components/Nav/index";
import logo from "../../Utils/Assets/logo.png";
import {
  Container,
  Header,
  PictureContainer,
  InputContainer,
  StyledButton,
  StyledTextField,
} from "./styles";

export const DashboardDeGrupos = () => {
  return (
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
  );
};
