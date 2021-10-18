import Home from "./Pages/Home";
import Login from "./Pages/Login";
import "./Utils/globalStyle.js";
import { GlobalStyle } from "./Utils/globalStyle.js";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      {/* <Login /> */}
    </div>
  );
}

export default App;
