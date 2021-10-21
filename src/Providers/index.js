import { GroupProvider } from "./groupsProvider";
import { SubsProvider } from "./currentGroupsProvider";
const GlobalProvider = ({ children }) => {
  return (
    <GroupProvider>
      <SubsProvider>{children}</SubsProvider>
    </GroupProvider>
  );
};

export default GlobalProvider;
