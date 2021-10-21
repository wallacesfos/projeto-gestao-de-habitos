import { GroupProvider2 } from "./groupsProvider";
import { SubsProvider } from "./currentGroupsProvider";
import { HabitsProvider } from "./Habits";
import { GoalProvider } from "./GoalProvider";
import { ActivitiesProvider } from "./ActivitiesProvider";
import { GroupProvider } from "./GroupProvider";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <GroupProvider2>
        <ActivitiesProvider>
          <GoalProvider>
            <SubsProvider>
              <HabitsProvider>{children}</HabitsProvider>;
            </SubsProvider>
          </GoalProvider>
        </ActivitiesProvider>
      </GroupProvider2>
    </GroupProvider>
  );
};
export default Providers;
