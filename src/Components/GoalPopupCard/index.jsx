import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgClose } from "react-icons/cg";

import {
  BackdropContainer,
  CardHeader,
  PopupCard,
  CardDescription,
  Button,
} from "./styles";
import {
  deleteGoal,
  getSpecificGoal,
  updateGoal,
} from "../../Utils/endpoints/goals";
import { useEffect, useState } from "react";

const GoalPopupCard = ({ goal_id, setCloseState, closeValue }) => {
  const [goal, setGoal] = useState({});

  useEffect(() => {
    const getGoal = async () => {
      let goal = {};
      await getSpecificGoal(goal_id).then(({ data }) => setGoal(data));
      return goal;
    };
    getGoal();
  }, []);

  const { title, difficulty, achieved, how_much_achieved, group } = goal;

  const handleClose = () => setCloseState(closeValue);

  const token = JSON.parse(localStorage.getItem("@Quero_token"));

  const handleCheckin = () => {
    const body = {
      how_much_achieved: how_much_achieved + 1,
    };

    updateGoal({ goal_id, body, token })
      .then(() => toast.success("Meta atualizada!"))
      .catch((err) => {
        toast.error("Deu ruim!");
        console.log(err.response);
      });
  };
  const hadleDelete = () => {
    deleteGoal({ goal_id, token })
      .then(() => toast.success("Meta deletada!"))
      .catch((err) => {
        toast.error("Deu ruim!");
        console.log(err.response);
      });
    setTimeout(setCloseState(closeValue), 5000);
  };

  return (
    <BackdropContainer>
      <ToastContainer />
      <PopupCard>
        <CardHeader>
          <p>{difficulty}</p>
          <CgClose onClick={handleClose} />
        </CardHeader>

        <CardDescription>{title}</CardDescription>

        <button onClick={hadleDelete}> deletar </button>

        <Button onClick={handleCheckin}> Check-in </Button>
      </PopupCard>
    </BackdropContainer>
  );
};

export default GoalPopupCard;
