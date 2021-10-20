import { GlobalStyle } from "./Utils/globalStyle.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Subscribe from "./Pages/Subscribe/index.jsx";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <br />
      <br />
      <Login />
      <br />
      <br />
      <Subscribe />
    </div>
  );
}

export default App;
