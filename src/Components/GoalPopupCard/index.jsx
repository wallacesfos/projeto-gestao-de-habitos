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
import useGoal from "../../Providers/GoalProvider";
import { useGroup } from "../../Providers/GroupProvider";

const GoalPopupCard = () => {
  const { currentGoal, updateCurrentGoal, resetCurrentGoal } = useGoal();
  const { updateCurrentGroup } = useGroup();

  useEffect(() => {
    // updateCurrentGoal(goal_id);
    // const getGoal = async () => {
    //   let goal = {};
    //   await getSpecificGoal(goal_id).then(({ data }) => setGoal(data));
    //   return goal;
    // };
    // getGoal();
  }, []);

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
      toast.success("Meta atualizada!");
    }

    updateCurrentGroup();
    updateCurrentGoal();
  };
  const hadleDelete = async () => {
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

        <button onClick={hadleDelete}> deletar </button>

        <Button disabled={achieved} onClick={handleCheckin}>
          {buttonText}
        </Button>
      </PopupCard>
    </BackdropContainer>
  );
};

export default GoalPopupCard;
