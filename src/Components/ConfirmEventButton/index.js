import { useState } from "react";
import { ConfirmBox, DeleteButton } from "./styles";

const ConfirmEventButton = ({
  handleClick,
  buttonText,
  className = "",
  desableSwitch,
}) => {
  const [activeMode, setActiveMode] = useState(false);

  const unswitableMode = (
    <DeleteButton {...{ className }} onClick={handleClick}>
      {buttonText}
    </DeleteButton>
  );

  const switableMode = (
    <>
      {!activeMode && (
        <DeleteButton
          {...{ className }}
          onClick={() => setTimeout(() => setActiveMode(true), 200)}
        >
          {buttonText}
        </DeleteButton>
      )}
      {activeMode && (
        <ConfirmBox>
          <DeleteButton onClick={handleClick}> Confirmar </DeleteButton>
          <DeleteButton
            cancelButton
            onClick={() => setTimeout(() => setActiveMode(false), 200)}
          >
            {" "}
            Cancelar{" "}
          </DeleteButton>
        </ConfirmBox>
      )}
    </>
  );

  return desableSwitch ? unswitableMode : switableMode;
};

export default ConfirmEventButton;
