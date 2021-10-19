import { Container } from "./styles.js";
import logo from "../../../Utils/Assets/logo.png";
import Nav from "../../../Components/Nav";
import Search from "../../../Components/Search";
export default function Header({ callback, param }) {
  return (
    <Container>
      <div className="col-left">
        <img src={logo} alt="Logo Quero!" />
      </div>
      <div className="col-right">
        <Nav dashboard />
        <Search />
      </div>
    </Container>
  );
}
