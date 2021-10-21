import { Container, Main, ContainerModal, Section } from "./style.js";
import Header from "../../../Components/HeaderDashboard";
import ButtonAdd from "../../../Components/ButtonAdd/index.jsx";
import Cards from "../../../Components/Cards/index.jsx";
import Footer from "../../../Components/Footer";
import { useEffect, useState } from "react";
import {
  createHabit,
  deleteHabit,
  updateHabit,
} from "../../../Utils/endpoints/habits/index.js";
import { useContext } from "react";
import { HabitsContext } from "../../../Providers/Habits";
import FormAddHabits from "../../../Components/FormAddHabits";
import { toast } from "react-toastify";
import Close from "../../../Components/Close/index.jsx";
import jwtDecode from "jwt-decode";
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
  const [idHabit, setIdHabit] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const token = JSON.parse(localStorage.getItem("@Quero_token"));
  const [user, setUser] = useState(0);
  const { user_id } = jwtDecode(token);
  const resetInputsHabits = () => {
    setTitleHabit("");
    setCategoryHabit("");
    setDifficultyHabit("");
    setFrequencyHabit("");
    setIdHabit(0);
  };
  const handleAddHabits = async () => {
    const body = {
      title: titleHabit,
      category: categoryHabit,
      difficulty: difficultyHabit,
      frequency: frequencyHabit,
      achieved: achievedHabit,
      how_much_achieved: 30,
      user: user_id,
    };
    const resp = await createHabit({ body, token });
    if (resp.status === 201) {
      toast.success("Adicionado com Sucesso!");
    } else {
      toast.error("Erro ao tentar adicionar!");
    }
    loadHabits();
    resetInputsHabits();
  };
  const handleSearch = () => {
    if (searchInput !== "") {
      setHabits(habits.filter((element) => element.title === searchInput));
    } else {
      loadHabits();
    }
  };
  const handleDelete = async (habit_id) => {
    const resp = await deleteHabit({ habit_id, token });
    if (resp.status === 204) {
      toast.success("Deletado com Sucesso!");
    } else {
      toast.error("Erro ao tentar Deletar!");
    }
    loadHabits();
  };
  const [isModal, setIsModal] = useState(false);
  const handleIsModal = (data) => {
    if (!isModal) {
      setTitleHabit(data.title);
      setCategoryHabit(data.category);
      setDifficultyHabit(data.difficulty);
      setFrequencyHabit(data.frequency);
      setIdHabit(data.id);
    }
    setIsModal(!isModal);
  };
  const handleUpdateHabits = async () => {
    const body = {
      title: titleHabit,
      category: categoryHabit,
      difficulty: difficultyHabit,
      frequency: frequencyHabit,
    };
    const resp = await updateHabit({ habit_id: idHabit, body, token });
    if (resp.status === 200) {
      toast.success("Atualizado com Sucesso!");
    } else {
      toast.error("Erro ao tentar Atualziar!");
    }
    resetInputsHabits();
    loadHabits();
  };
  useEffect(() => {
    loadHabits();
  }, []);
  return (
    <>
      <Container>
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
                  isUpdate
                  value="Cadastrar"
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
                    callbackClose={handleDelete}
                    callbackEdit={handleIsModal}
                    param={element.id}
                    data={element}
                  />
                ))}
              {isModal && (
                <ContainerModal>
                  <Close delet callback={() => handleIsModal()} />
                  <div className="Modal">
                    <FormAddHabits
                      callback={handleUpdateHabits}
                      titleHabit={titleHabit}
                      setTitleHabit={setTitleHabit}
                      categoryHabit={categoryHabit}
                      setCategoryHabit={setCategoryHabit}
                      difficultyHabit={difficultyHabit}
                      setDifficultyHabit={setDifficultyHabit}
                      frequencyHabit={frequencyHabit}
                      setFrequencyHabit={setFrequencyHabit}
                      isUpdate
                      value="Atualizar"
                    />
                  </div>
                </ContainerModal>
              )}
            </div>
          </Section>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
