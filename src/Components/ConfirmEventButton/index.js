import { useState } from "react";
import { ConfirmBox, Button } from "./styles";

const ConfirmEventButton = ({
  handleClick,
  buttonText,
  className = "",
  desableSwitch,
}) => {
  const [activeMode, setActiveMode] = useState(false);

  const handleConfirm = async () => {
    await handleClick();
    setTimeout(() => setActiveMode(false), 500);
  };

  const unswitableMode = (
    <Button {...{ className }} onClick={handleClick}>
      {buttonText}
    </Button>
  );

  const switableMode = (
    <>
      {!activeMode && (
        <Button
          {...{ className }}
          onClick={() => setTimeout(() => setActiveMode(true), 200)}
        >
          {buttonText}
        </Button>
      )}
      {activeMode && (
        <ConfirmBox>
          <Button onClick={handleConfirm}> Confirmar </Button>
          <Button
            cancelButton
            onClick={() => setTimeout(() => setActiveMode(false), 200)}
          >
            {" "}
            Cancelar{" "}
          </Button>
        </ConfirmBox>
      )}
    </>
  );

  return desableSwitch ? unswitableMode : switableMode;
};

export default ConfirmEventButton;
