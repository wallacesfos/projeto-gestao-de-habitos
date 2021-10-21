import { ActivitiesProvider } from "./ActivitiesProvider";
import { GoalProvider } from "./GoalProvider";
import { GroupProvider } from "./GroupProvider";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <ActivitiesProvider>
        <GoalProvider>{children}</GoalProvider>
      </ActivitiesProvider>
    </GroupProvider>
  );
};

export default Providers;
