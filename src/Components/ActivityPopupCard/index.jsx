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
import { deleteActivity } from "../../Utils/endpoints/activities";
import dateFormater from "../../Utils/dateFormater";

const ActivityPopupCard = ({ deleteToast }) => {
  const {
    currentActivity,
    updateCurrentActivity,
    updateGroupActivities,
    resetCurrentActivity,
  } = useActivity();

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
