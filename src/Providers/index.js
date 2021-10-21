import { GroupProvider } from "./groupsProvider";
import { SubsProvider } from "./currentGroupsProvider";
import { HabitsProvider } from "./Habits";
import { GoalProvider } from "./GoalProvider";
import { ActivitiesProvider } from "./ActivitiesProvider";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <ActivitiesProvider>
        <GoalProvider>
          <SubsProvider>
            <HabitsProvider>{children}</HabitsProvider>;
          </SubsProvider>
        </GoalProvider>
      </ActivitiesProvider>
    </GroupProvider>
  );
};
export default Providers;
