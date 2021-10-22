import { ButtonClose } from "./style.js";
import { FiEdit, FiXCircle } from "react-icons/fi";
export default function Close({
  callback,
  param,
  delet = false,
  edit = false,
}) {
  return (
    <ButtonClose onClick={() => callback(param)}>
      {delet && <FiXCircle />}
      {edit && <FiEdit />}
    </ButtonClose>
  );
}
