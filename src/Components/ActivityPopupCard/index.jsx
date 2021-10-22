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
import ConfirmEventButton from "../ConfirmEventButton";
import useActivity from "../../Providers/ActivitiesProvider";
import {
  deleteActivity,
  updateActivity,
} from "../../Utils/endpoints/activities";
import dateFormater from "../../Utils/dateFormater";
import ActivitForm from "../ActivitForm";
import { useState } from "react";

const ActivityPopupCard = () => {
  const {
    currentActivity,
    updateCurrentActivity,
    updateGroupActivities,
    resetCurrentActivity,
  } = useActivity();

  const [updateMode, setUpdateMode] = useState(false);

  const { id, title, realization_time } = currentActivity;

  const handleClose = () => resetCurrentActivity();

  const token = JSON.parse(localStorage.getItem("@Quero_token"));

  const handleDelete = async () => {
    const resp = await deleteActivity({ activity_id: id, token });

    if (resp.status === 204) {
      toast.success("Meta deletada!");
    }

    updateGroupActivities();
    updateCurrentActivity();
  };

  const formatedDate = dateFormater(realization_time);

  const handleUpdate = async (data) => {
    const resp = await updateActivity({ activity_id: id, body: data, token });

    if (resp.status === 204) {
      toast.success("Meta deletada!");
    }

    updateGroupActivities();
    updateCurrentActivity();
  };

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

        <Button onClick={() => setUpdateMode(true)}>Editar atividade</Button>
      </PopupCard>

      {updateMode && (
        <ActivitForm {...{ updateMode, setUpdateMode, handleUpdate }} />
      )}
    </BackdropContainer>
  );
};

export default ActivityPopupCard;
