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
} from "../pagesStyle.js";
export default function Home() {
  return (
    <>
      <Container>
        <ContainerNav>
          <div>
            <img src={logo} alt="Quero!" />
          </div>
          <div>nav</div>
        </ContainerNav>
        <Section home>
          <div className="Section-col">
            <img src={svg1} alt="Lendo um resumo da Quero!" />
          </div>
          <div className="Section-col">
            <div className="card">
              A Quero! é uma plataforma de organização e aprendizado para novos
              habitos ou aprimoramendo deles.
            </div>
          </div>
        </Section>
        <Section home className="column-reverse">
          <div className="Section-col">
            <div className="card">
              Na Quero! Você anota seus habitos com praticidade e participa de
              grupos desses habitos ou de conteúdos relacionados.
            </div>
          </div>
          <div className="Section-col">
            <img src={svg2} alt="Lendo um resumo da Quero!" />
          </div>
        </Section>
        <ContainerButton>
          <button className="btn-primary btn-primary">Cadastre-se</button>
        </ContainerButton>
        <ContainerApp>
          <div>Baixe Nosso App:</div>
          <div>Android IOS</div>
        </ContainerApp>
      </Container>
      <ContainerFooter>
        <div className="footer-col">
          <img src={logo} alt="Quero! footer" />
        </div>
        <div className="footer-col">nav</div>
      </ContainerFooter>
    </>
  );
}
