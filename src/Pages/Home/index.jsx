import Nav from "../../Components/Nav";
import logo from "../../Utils/Assets/logo.png";
import svg1 from "../../Utils/Assets/svg1.svg";
import svg2 from "../../Utils/Assets/svg2.svg";
import {
  Container,
  ContainerApp,
  ContainerButton,
  ContainerFooter,
  ContainerNav,
  Section,
} from "./style.js";
export default function Home() {
  return (
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
      <Section className="column-reverse">
        <div>
          <div className="card">
            Na Quero! Você anota seus habitos com praticidade e participa de
            grupos desses habitos ou de conteúdos relacionados.
          </div>
        </div>
        <div>
          <img src={svg2} alt="Lendo um resumo da Quero!" />
        </div>
      </Section>
      <ContainerButton>Button Cadastre-se</ContainerButton>
      <ContainerApp>
        <div>Baixe Nosso App:</div>
        <div>Android IOS</div>
      </ContainerApp>
      <ContainerFooter>
        <div>
          <img src={logo} alt="Quero! footer" />
        </div>
        <div>
          <Nav footer />
        </div>
      </ContainerFooter>
    </Container>
  );
}
