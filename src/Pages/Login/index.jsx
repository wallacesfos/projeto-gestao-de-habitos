import Nav from "../../Components/Nav";
import logo from "../../Utils/Assets/logo.png";
import signin from "../../Utils/Assets/Signin.svg";
import {
  Container,
  ContainerApp,
  ContainerFooter,
  ContainerNav,
  Section,
} from "../pagesStyle.js";
export default function Login() {
  return (
    <>
      <Container>
        <ContainerNav>
          <div>
            <img src={logo} alt="Quero!" />
          </div>
          <div>
            <Nav />
          </div>
        </ContainerNav>
        <Section>
          <div>
            <img src={signin} alt="Lendo um resumo da Quero!" />
          </div>
          <div>Formulario Login</div>
        </Section>
        <ContainerApp>
          <div>Baixe Nosso App:</div>
          <div>Android IOS</div>
        </ContainerApp>
      </Container>
      <ContainerFooter>
        <div className="footer-col">
          <img src={logo} alt="Quero! footer" />
        </div>
        <div className="footer-col">
          <Nav footer />
        </div>
      </ContainerFooter>
    </>
  );
}
