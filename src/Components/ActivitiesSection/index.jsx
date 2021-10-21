import { toast, ToastContainer } from "react-toastify";
import useActivity from "../../Providers/ActivitiesProvider";
import { useGroup } from "../../Providers/GroupProvider";
import { createActivity } from "../../Utils/endpoints/activities";
import ActivityPopupCard from "../ActivityPopupCard";

import GoalPopupCard from "../GoalPopupCard";
import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./styles";

const ActivitiesSection = ({ activities }) => {
  const { currentGroup } = useGroup();
  const token = JSON.parse(localStorage.getItem("@Quero_token"));

  const {
    currentActivity,
    groupActivities,
    updateCurrentActivity,
    updateGroupActivities,
    resetCurrentActivity,
  } = useActivity();

  console.log(currentActivity);

  const deleteToast = () => {
    toast.success("Meta deletada!");
  };

  const handleCreate = async () => {
    const body = {
      title: "Estudar Material-UI loucamente",
      realization_time: "2021-03-10T15:00:00Z",
      group: currentGroup.id,
    };

    const resp = await createActivity({ body, token });

    if (resp.status === 201) {
      toast.success("Atividade criada!");
    }

    updateGroupActivities();
  };

  return (
    <AsideBar>
      <ToastContainer />
      <GroupCardSection variant="activities" {...{ handleCreate }}>
        <ul>
          {activities.map(({ id, title, realization_time }) => {
            const meses = [
              "janeiro",
              "fevereiro",
              "março",
              "abril",
              "maio",
              "junho",
              "julho",
              "agosto",
              "setembro",
              "outubro",
              "novembro",
              "dezembro",
            ];
            const date = new Date(realization_time);
            const formatedDate = `${date.getDate()} de ${
              meses[date.getMonth()]
            } de ${date.getFullYear()}`;

            return (
              <div key={id}>
                <Item onClick={() => updateCurrentActivity(id)}>
                  <h4> {title}</h4>
                  <p>Prazo: {formatedDate}</p>
                </Item>
                {currentActivity?.id === id && (
                  <ActivityPopupCard {...{ deleteToast }} />
                )}
              </div>
            );
          })}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default ActivitiesSection;
