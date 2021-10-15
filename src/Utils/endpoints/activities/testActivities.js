import { getGroupActivities, getSpecificActivitie } from ".";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjkwNDA4LCJqdGkiOiI0NjNlNGQ1YzBmN2Y0YzQzOWQ4NTgxMmE0NDE3OTI5YSIsInVzZXJfaWQiOjQwfQ.5OIc_pRkftoZBoIqN0V6-dg-VNoveVXOz5F7pZHWlBw";

const body = {
  //   title: "Nenhuma falta na academia cometida pelos membros do grupo na semana",
  //   difficulty: "Díficil",
  //   how_much_achieved: 100,
  //   group: 3,
  achieved: true,
};

const args = {
  group_id: 3,
};

const testActivities = () => {
  getSpecificActivitie(3)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};

export default testActivities;
