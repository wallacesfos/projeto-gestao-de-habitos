import { ButtonClose } from "./style.js";
export default function Close({ callback, param }) {
  return <ButtonClose onClick={() => callback(param)}>X</ButtonClose>;
}
