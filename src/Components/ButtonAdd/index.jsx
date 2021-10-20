import { ButtonNew } from "./style.js";
export default function ButtonAdd({ callback, param }) {
  return <ButtonNew onClick={() => callback(param)}></ButtonNew>;
}
