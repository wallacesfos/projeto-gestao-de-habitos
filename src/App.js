import Habits from "./Pages/Dashboard/DachboardHabits/index.jsx";
import { GlobalStyle } from "./Utils/globalStyle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      {/* <Login /> */}
      <br />
      <br />
      <Habits />
      {/* <FormAddHabits /> */}
    </div>
  );
}

export default App;
