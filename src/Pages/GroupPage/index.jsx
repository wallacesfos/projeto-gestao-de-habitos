import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import ActivitiesSection from "../../Components/ActivitiesSection";
import AsideMembers from "../../Components/AsideMembers";
import ConfirmEventButton from "../../Components/ConfirmEventButton";
import Footer from "../../Components/Footer";
import GoalsSection from "../../Components/GoalsSection";
import useActivity from "../../Providers/ActivitiesProvider";
import useGoal from "../../Providers/GoalProvider";
import { useGroup } from "../../Providers/GroupProvider";
import {
  subscribeToGroup,
  unsubscribeFromGroup,
} from "../../Utils/endpoints/groups";
import { HeaderBox, Container, SectonBox, BoxMain } from "./styles";
import GenericHeader from "../../Components/GenericHeader";

const GroupPage = () => {
  const { currentGroup, updateCurrentGroup } = useGroup();
  const token = JSON.parse(localStorage.getItem("@Quero_token"));
  const { user_id } = jwtDecode(token);
  const { groupGoals, updateGroupGoals } = useGoal();

  const { groupActivities, updateGroupActivities } = useActivity();

  useEffect(() => {
    updateGroupGoals();
    updateGroupActivities();
  }, []); // eslint-disable-line

  const { id, name, description, users_on_group: memberList } = currentGroup;

  const handleUnsubscribe = async () => {
    const resp = await unsubscribeFromGroup({ group_id: id, token });

    if (resp.status === 204) {
      toast.success("Você saiu do grupo");
    }

    updateCurrentGroup();
  };

  const handleSubscribe = async () => {
    const resp = await subscribeToGroup({ group_id: id, token });

    if (resp.status === 200) {
      toast.success("Você se juntou ao grupo");
    }

    updateCurrentGroup();
  };

  const userIsOnGroup = currentGroup.users_on_group.some(
    ({ id }) => id === user_id
  );

  const props = {
    handleClick: userIsOnGroup ? handleUnsubscribe : handleSubscribe,
    buttonText: userIsOnGroup ? "Sair do grupo" : "Entrar no Grupo",
  };

  return (
    <Container>
      <ToastContainer />
      <GenericHeader />

      <SectonBox>
        <HeaderBox>
          <h2> {name} </h2>
          <p>{description}</p>
          <ConfirmEventButton
            desableSwitch={!userIsOnGroup}
            className="unsubscribeButton"
            {...props}
          />
        </HeaderBox>
        <BoxMain>
          <div>
            <AsideMembers {...{ memberList }} />
          </div>
          <div className="rightSection">
            <GoalsSection {...{ goals: groupGoals }} />
            <ActivitiesSection {...{ activities: groupActivities }} />
          </div>
        </BoxMain>
      </SectonBox>
      <Footer />
    </Container>
  );
};

export default GroupPage;
