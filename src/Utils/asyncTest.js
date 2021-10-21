import { toast, ToastContainer } from "react-toastify";
import { deleteActivity } from "./endpoints/activities";
import { getHabits } from "./endpoints/habits";

const AsyncButtonTest = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1MjEwMjE1LCJqdGkiOiJkNTYwMmFiMDk2NWM0NjYzOTk2YjRkOThlNDZiN2M1ZiIsInVzZXJfaWQiOjI4OX0.gMVmXCRJw33hoFaIQ8f96LLDfRm64H-9XLrZmJYTvpQ";

  const body = {
    title: "Crossfit Atualizado",
  };

  const handle = async () => {
    const resp = await getHabits(token);

    if (resp.status === 400) {
      toast.error("Apenas o criador edita");
    }

    if (resp.status === 204) {
      toast.success("Atividade atualizada");
    }

    console.log(resp);
  };

  return (
    <>
      <ToastContainer />
      <button onClick={handle}> Enviar </button>
    </>
  );
};

export default AsyncButtonTest;
