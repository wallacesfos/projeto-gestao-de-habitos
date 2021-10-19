import Habits from "./Pages/Dashboard/DachboardHabits/index.jsx";
import Home from "./Pages/Home";
import "./Utils/globalStyle.js";
import { GlobalStyle } from "./Utils/globalStyle.js";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Habits />
      <Home />
    </div>
  );
}

export default App;
