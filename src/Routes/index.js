import { Switch } from "react-router-dom";
import Route from "./routes";
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Subscribe from "../Pages/Subscribe";
// import GroupPage from "../Pages/GroupPage";
import { GroupsDashboard } from "../Pages/GroupsDashboard";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route isPrivate path="/group-page" exact component={GroupPage} /> */}
    <Route path="/login" component={Login} />
    <Route path="/sign-up" component={Subscribe} />
    <Route isPrivate path="/group-dashboard" component={GroupsDashboard} />
  </Switch>
);
export default Routes;
