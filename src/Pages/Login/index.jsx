import Nav from "../../Components/Nav";
import logo from "../../Utils/Assets/logo.png";
import signin from "../../Utils/Assets/Signin.svg";
import Singin from "../../Components/Signin";
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
          <div className="Section-col">
            <img src={signin} alt="Lendo um resumo da Quero!" />
          </div>
          <div className="Section-col">
            <Singin />
          </div>
        </Section>
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
