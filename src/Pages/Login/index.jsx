import Nav from "../../Components/Nav";
import logo from "../../Utils/Assets/logo.png";
import svg1 from "../../Utils/Assets/svg1.svg";
import {
  Container,
  ContainerApp,
  ContainerFooter,
  ContainerNav,
  Section,
} from "./style.js";
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
            <img src={svg1} alt="Lendo um resumo da Quero!" />
          </div>
          <div>
            <div className="card">
              A Quero! é uma plataforma de organização e aprendizado para novos
              habitos ou aprimoramendo deles.
            </div>
          </div>
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
