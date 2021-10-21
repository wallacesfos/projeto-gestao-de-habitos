import { ActivitiesProvider } from "./ActivitiesProvider";
import { GoalProvider } from "./GoalProvider";
import { GroupProvider } from "./GroupProvider";
import { HabitsProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <ActivitiesProvider>
        <GoalProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </GoalProvider>
      </ActivitiesProvider>
    </GroupProvider>
  );
};

export default Providers;
