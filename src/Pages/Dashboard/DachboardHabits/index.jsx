import { Container, Main, Section } from "./style.js";
import Header from "../../../Components/HeaderDashboard";
import ButtonAdd from "../../../Components/ButtonAdd/index.jsx";
import Cards from "../../../Components/Cards/index.jsx";
import Footer from "../../../Components/Footer";
import { useEffect, useState } from "react";
import { createHabit } from "../../../Utils/endpoints/habits/index.js";
import { useContext } from "react";
import { HabitsContext } from "../../../Providers/Habits";
import FormAddHabits from "../../../Components/FormAddHabits";
import { toast } from "react-toastify";
export default function Habits() {
  const { loadHabits, habits, setHabits } = useContext(HabitsContext);
  const [isVisible, setIsVisible] = useState(false);
  const isFormAddHabits = () => {
    setIsVisible(!isVisible);
  };
  const [titleHabit, setTitleHabit] = useState("");
  const [categoryHabit, setCategoryHabit] = useState("");
  const [difficultyHabit, setDifficultyHabit] = useState("");
  const [frequencyHabit, setFrequencyHabit] = useState("");
  const [achievedHabit, setAchieved] = useState(false);
  const [howMuchAchievedHabit, setHowMuchAchievedHabit] = useState(0);
  const [useHabit, setUserHabit] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const handleAddHabits = async () => {
    const token = JSON.parse(localStorage.getItem("@token"));
    const body = {
      title: titleHabit,
      category: categoryHabit,
      difficulty: difficultyHabit,
      frequency: frequencyHabit,
      achieved: achievedHabit,
      how_much_achieved: 30,
      user: 289,
    };
    const resp = await createHabit({ body, token });
    if (resp.status === 201) {
      toast.success("Adicionado com Sucesso!");
    } else {
      toast.error("Erro ao tentar adicionar!");
    }
    loadHabits();
  };
  const handleSearch = () => {
    setHabits(habits.filter((element) => element.title === searchInput));
  };
  useEffect(() => {
    loadHabits();
  }, []);
  return (
    <>
      <Container>
        how_much_achieved
        <Header
          placeHolder="Buscar seus Hábitos..."
          variavel={searchInput}
          setVariavel={setSearchInput}
          callback={handleSearch}
        />
        <Main>
          <Section>
            <h1>Hábitos</h1>
            <div className="Section-ButtonAdd">
              <ButtonAdd callback={isFormAddHabits} />
              {isVisible && (
                <FormAddHabits
                  callback={handleAddHabits}
                  titleHabit={titleHabit}
                  setTitleHabit={setTitleHabit}
                  categoryHabit={categoryHabit}
                  setCategoryHabit={setCategoryHabit}
                  difficultyHabit={difficultyHabit}
                  setDifficultyHabit={setDifficultyHabit}
                  frequencyHabit={frequencyHabit}
                  setFrequencyHabit={setFrequencyHabit}
                />
              )}
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
