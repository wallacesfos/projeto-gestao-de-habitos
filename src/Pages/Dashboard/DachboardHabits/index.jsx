import { Container, Main, Section } from "./style.js";
import Header from "../../../Components/HeaderDashboard";
import ButtonAdd from "../../../Components/ButtonAdd/index.jsx";
import Cards from "../../../Components/Cards/index.jsx";
import Footer from "../../../Components/Footer";
export default function Habits() {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Section>
            <h1>Hábitos</h1>
            <div className="Section-ButtonAdd">
              <ButtonAdd />
            </div>
            <div className="Section-Cards">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </Section>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
