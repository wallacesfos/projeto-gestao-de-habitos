import logo from "../../Utils/Assets/logo.png";
import Nav from "../Nav";
import { ContainerFooter } from "./style.js";
export default function Footter() {
  return (
    <ContainerFooter>
      <div className="footer-col">
        <img src={logo} alt="Quero! footer" />
      </div>
      <div className="footer-col">
        <Nav footer />
      </div>
    </ContainerFooter>
  );
}
