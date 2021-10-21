import Routes from "./Routes/";
import { GlobalStyle } from "./Utils/globalStyle.js";
import { GroupsDashboard } from "./Pages/GroupsDashboard/index.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <GlobalStyle />
      <Routes />
      {/* <Register /> */}
      {/* <GroupsDashboard /> */}
    </div>
  );
}

export default App;
