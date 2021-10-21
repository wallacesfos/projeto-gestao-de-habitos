import { Switch } from "react-router-dom";
import Route from "./routes";
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Subscribe from "../Pages/Subscribe";
import HomeDashboard from "../Pages/Dashboard/DachboardHabits";
//import GroupPage from "../Pages/GroupPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/*<Route isPrivate path="/group-page" exact component={GroupPage} />*/}
    <Route path="/login" exact component={Login} />
    <Route path="/sign-up" exact component={Subscribe} />
    <Route path="/dashboard" exact component={HomeDashboard} />
  </Switch>
);
export default Routes;
