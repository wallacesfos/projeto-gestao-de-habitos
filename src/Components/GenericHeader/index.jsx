import { Container } from "./styles.js";
import logo from "../../Utils/Assets/logo.png";
import Nav from "../Nav";
export default function GenericHeader() {
  return (
    <Container>
      <div className="col-left">
        <img src={logo} alt="Logo Quero!" />
      </div>
      <div className="col-right">
        <Nav dashboard />
      </div>
    </Container>
  );
}
