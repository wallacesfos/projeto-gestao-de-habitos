import group_members from "./../../Utils/Assets/group_members.png";
import goal from "./../../Utils/Assets/goal.png";
import event from "./../../Utils/Assets/event.png";
import { useHistory } from "react-router-dom";

import { CgClose } from "react-icons/cg";

import {
  BackdropContainer,
  CardHeader,
  PopupCard,
  CardDescription,
  CategoryIcon,
  MoreInfo,
  StatsBar,
  StatItem,
  Button,
} from "./styles";
import groupCategories from "../../Utils/groupCatecories";
import stringNormalizer from "../../Utils/stringNormalizer";
import stringCutter from "../../Utils/stringCutter";
import {
  subscribeToGroup,
  unsubscribeFromGroup,
} from "../../Utils/endpoints/groups";
import jwtDecode from "jwt-decode";

const PopupScreen = ({ group, setCloseState }) => {
  const { push: goTo } = useHistory();

  const { id, name, description, users_on_group, goals, activities, category } =
    group;

  const ajustedname = stringCutter(name, 65);

  const groupCategory = groupCategories.find(({ name }) =>
    stringNormalizer(category).includes(stringNormalizer(name))
  );

  const categoryImage = groupCategory?.image;

  const membersAmount = users_on_group.length;
  const goalsAmount = goals.length;
  const activitiesAmount = activities.length;

  const handleClose = () => setCloseState(false);
  const handleMoreInfo = () => {
    goTo("/group-page");
  };

  const token = JSON.parse(localStorage.getItem("@Quero_token"));
  const { user_id } = jwtDecode(token);
  const alreadyOnGroup = users_on_group.some(({ id }) => id === user_id);

  const args = { group_id: id, token };

  const handleSubscribe = () => {
    if (alreadyOnGroup) {
      unsubscribeFromGroup(args)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }

    subscribeToGroup(args)
      .then((resp) => {
        // updateGroups(getSpecificGroup(group_id));
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  const buttonText = alreadyOnGroup ? "Sair do grupo" : "Se juntar ao grupo";

  return (
    <BackdropContainer>
      <PopupCard>
        <CardHeader>
          <p>{ajustedname}</p>
          <CgClose onClick={handleClose} />
        </CardHeader>
        {categoryImage && (
          <CategoryIcon
            src={categoryImage}
            alt="Health catecory"
          ></CategoryIcon>
        )}

        <CardDescription>{description}</CardDescription>

        <MoreInfo onClick={handleMoreInfo}> More info... </MoreInfo>

        <StatsBar>
          <StatItem color="#B6E09C">
            <p> {goalsAmount} </p> <img src={goal} alt="Goals" />
          </StatItem>
          <StatItem color="#9CE0CC">
            <p> {activitiesAmount} </p> <img src={event} alt="Activities" />
          </StatItem>
          <StatItem color="#E09CD1">
            <p> {membersAmount} </p>{" "}
            <img src={group_members} alt="Group Members" />
          </StatItem>
        </StatsBar>

        <Button onClick={handleSubscribe}> {buttonText} </Button>
      </PopupCard>
    </BackdropContainer>
  );
};

export default PopupScreen;
