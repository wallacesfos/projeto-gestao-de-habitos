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
import { deleteGoal, updateGoal } from "../../Utils/endpoints/goals";
import useGoal from "../../Providers/GoalProvider";
import { useGroup } from "../../Providers/GroupProvider";
import ConfirmEventButton from "../ConfirmEventButton";

const GoalPopupCard = ({ deleteToast }) => {
  const { currentGoal, updateCurrentGoal, resetCurrentGoal } = useGoal();
  const { updateCurrentGroup } = useGroup();

  const { id, title, difficulty, achieved, how_much_achieved } = currentGoal;

  const handleClose = () => resetCurrentGoal();

  const token = JSON.parse(localStorage.getItem("@Quero_token"));

  const handleCheckin = async () => {
    if (achieved) {
      return;
    }

    let body = {
      how_much_achieved: how_much_achieved + 1,
    };

    if (how_much_achieved + 1 === 100) {
      body = { ...body, achieved: true };
    }

    const resp = await updateGoal({ goal_id: id, body, token });

    if (resp.status === 200) {
      deleteToast();
    }

    updateCurrentGroup();
    updateCurrentGoal();
  };
  const handleDelete = async () => {
    const resp = await deleteGoal({ goal_id: id, token });

    if (resp.status === 204) {
      toast.success("Meta deletada!");
    }

    updateCurrentGroup();
    resetCurrentGoal();
  };

  const buttonText = achieved ? "Meta alcançada" : "Check-in";

  return (
    <BackdropContainer>
      <ToastContainer />
      <PopupCard>
        <CardHeader>
          <p>{difficulty.toUpperCase()}</p>
          <CgClose onClick={handleClose} />
        </CardHeader>

        <CardDescription>{title}</CardDescription>

        <ConfirmEventButton
          {...{ handleClick: handleDelete, buttonText: "Excluir" }}
        />

        <Button disabled={achieved} onClick={handleCheckin}>
          {buttonText}
        </Button>
      </PopupCard>
    </BackdropContainer>
  );
};

export default GoalPopupCard;
