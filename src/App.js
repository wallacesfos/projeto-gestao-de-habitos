import Habits from "./Pages/Dashboard/DachboardHabits/index.jsx";
import { GlobalStyle } from "./Utils/globalStyle.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Habits />
    </div>
  );
}

export default App;
