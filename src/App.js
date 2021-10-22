import GlobalStyle from "./Utils/globalStyle.js";
import { ToastContainer } from "react-toastify";
import Routes from "./Routes";

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
