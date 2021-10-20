import { useState } from "react";
import { ConfirmBox, DeleteButton } from "./styles";

const ConfirmEventButton = ({ handleClick }) => {
  const [activeMode, setActiveMode] = useState(false);

  return (
    <>
      {!activeMode && (
        <DeleteButton
          onClick={() => setTimeout(() => setActiveMode(true), 200)}
        >
          {" "}
          Deletar{" "}
        </DeleteButton>
      )}
      {activeMode && (
        <ConfirmBox>
          <DeleteButton onClick={handleClick}> Confirmar </DeleteButton>
          <DeleteButton
            onClick={() => setTimeout(() => setActiveMode(false), 200)}
          >
            {" "}
            Voltar{" "}
          </DeleteButton>
        </ConfirmBox>
      )}
    </>
  );
};

export default ConfirmEventButton;
