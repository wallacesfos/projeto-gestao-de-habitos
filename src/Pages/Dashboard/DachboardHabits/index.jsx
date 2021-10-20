import { Container, Main, Section } from "./style.js";
import Header from "../../../Components/HeaderDashboard";
import ButtonAdd from "../../../Components/ButtonAdd/index.jsx";
import Cards from "../../../Components/Cards/index.jsx";
import Footer from "../../../Components/Footer";
import { useEffect } from "react";
import FormAddHabits from "../../../Components/FormAddHabits/index.jsx";
export default function Habits() {
  const LoadHabits = () => {};
  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Header placeHolder="Buscar seus Hábitos..." />
        <Main>
          <Section>
            <h1>Hábitos</h1>
            <div className="Section-ButtonAdd">
              <ButtonAdd />
            </div>
            <div>
              <FormAddHabits />
            </div>
            <div className="Section-Cards"></div>
          </Section>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
