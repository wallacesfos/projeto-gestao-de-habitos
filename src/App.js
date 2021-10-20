import Habits from "./Pages/Dashboard/DachboardHabits/index.jsx";
import { GlobalStyle } from "./Utils/globalStyle.js";
import Login from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Login />
      <br />
      <br />
      <Habits />
    </div>
  );
}

export default App;
