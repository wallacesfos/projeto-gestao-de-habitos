import { Container } from "./styles.js";
import logo from "../../Utils/Assets/logo.png";
import Nav from "../Nav";
import Search from "../Search";
export default function Header({
  callback,
  param,
  placeHolder,
  showLogo,
  showNav,
  showLeftCol,
  resetFunction,
}) {
  return (
    <Container>
      {showLeftCol && (
        <div className="col-left">
          {showLogo && <img src={logo} alt="Logo Quero!" />}
        </div>
      )}
      <div className="col-right">
        {showNav && <Nav dashboard />}
        <Search
          placeHolder={placeHolder}
          callback={callback}
          resetFunction={resetFunction}
          param
        />
      </div>
    </Container>
  );
}
