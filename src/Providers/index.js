import { GoalProvider } from "./GoalProvider";
import { GroupProvider } from "./GroupProvider";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <GoalProvider>{children}</GoalProvider>
    </GroupProvider>
  );
};

export default Providers;
