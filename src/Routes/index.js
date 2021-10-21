import { Switch } from "react-router-dom";
import Route from "./routes";
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Subscribe from "../Pages/Subscribe";
import GroupPage from "../Pages/GroupPage";
import HomeDashboard from "../Pages/Dashboard/DachboardHabits";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route isPrivate path="/group-page" exact component={GroupPage} />
    <Route path="/login" exact component={Login} />
    <Route path="/sign-up" exact component={Subscribe} />
    <Route isPrivate path="/dashboard" exact component={HomeDashboard} />
  </Switch>
);
export default Routes;
