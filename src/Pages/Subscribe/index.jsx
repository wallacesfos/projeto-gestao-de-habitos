import Nav from "../../Components/Nav";
import Register from "../../Components/Register";
import logo from "../../Utils/Assets/logo.png";
import login from "../../Utils/Assets/login.svg";
import {
  Container,
  ContainerApp,
  ContainerFooter,
  ContainerNav,
  Section,
} from "../pagesStyle.js";
export default function Subscribe() {
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
            <img src={login} alt="Lendo um resumo da Quero!" />
          </div>
          <div className="Section-col">
            <div>
              {" "}
              <Register />{" "}
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
