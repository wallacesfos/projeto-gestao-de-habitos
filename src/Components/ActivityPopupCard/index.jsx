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
import ConfirmEventButton from "../ConfirmEventButton";
import useActivity from "../../Providers/ActivitiesProvider";
import {
  deleteActivity,
  updateActivity,
} from "../../Utils/endpoints/activities";
import dateFormater from "../../Utils/dateFormater";

const ActivityPopupCard = ({ deleteToast }) => {
  const {
    currentActivity,
    groupActivities,
    updateCurrentActivity,
    updateGroupActivities,
    resetCurrentActivity,
  } = useActivity();

  const { id, title, realization_time } = currentActivity;

  const handleClose = () => resetCurrentActivity();

  const token = JSON.parse(localStorage.getItem("@Quero_token"));

  // const handleCheckin = async () => {
  //   if (achieved) {
  //     return;
  //   }

  //   let body = {
  //     how_much_achieved: how_much_achieved + 1,
  //   };

  //   if (how_much_achieved + 1 === 100) {
  //     body = { ...body, achieved: true };
  //   }

  //   const resp = await updateActivity({ activity_id: id, body, token });

  //   if (resp.status === 200) {
  //     deleteToast();
  //   }

  //   updateGroupActivities();
  //   updateCurrentActivity();
  // };

  const handleDelete = async () => {
    const resp = await deleteActivity({ activity_id: id, token });

    if (resp.status === 204) {
      toast.success("Meta deletada!");
    }

    updateGroupActivities();
    updateCurrentActivity();
  };

  const formatedDate = dateFormater(realization_time);

  return (
    <BackdropContainer>
      <ToastContainer />
      <PopupCard>
        <CardHeader>
          <p> Até: {formatedDate}</p>
          <CgClose onClick={handleClose} />
        </CardHeader>

        <CardDescription>{title}</CardDescription>

        <ConfirmEventButton
          {...{ handleClick: handleDelete, buttonText: "Excluir" }}
        />

        <Button>Editar atividade</Button>
      </PopupCard>
    </BackdropContainer>
  );
};

export default ActivityPopupCard;
