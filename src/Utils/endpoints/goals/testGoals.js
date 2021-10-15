import { getGroupGoal } from ".";

const args = {
  group_id: 2,
};

const testGoals = () => {
  getGroupGoal(args)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};

export default testGoals;
