import { Container, Main, Section } from "./style.js";
import Header from "../../../Components/HeaderDashboard";
import ButtonAdd from "../../../Components/ButtonAdd/index.jsx";
import Cards from "../../../Components/Cards/index.jsx";
import Footer from "../../../Components/Footer";
import { useEffect, useState } from "react";
import { getHabits } from "../../../Utils/endpoints/habits/index.js";
import { useContext } from "react";
import { HabitsContext } from "../../../Providers/Habits";
export default function Habits() {
  const { loadHabits, habits } = useContext(HabitsContext);

  useEffect(() => {
    loadHabits();
  }, []);
  return (
    <>
      {console.log(habits)}
      <Container>
        <Header placeHolder="Buscar seus Hábitos..." />
        <Main>
          <Section>
            <h1>Hábitos</h1>
            <div className="Section-ButtonAdd">
              <ButtonAdd />
            </div>
            <div className="Section-Cards">
              {habits[0] &&
                habits.map((element, indice) => (
                  <Cards
                    key={indice}
                    title={element.title}
                    description={element.difficulty}
                  />
                ))}
            </div>
          </Section>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
