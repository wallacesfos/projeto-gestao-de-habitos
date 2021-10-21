import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./style";

const AsideMembers = ({ memberList }) => {
  return (
    <AsideBar>
      <GroupCardSection notAddButton variant="members">
        <ul>
          {memberList.map(({ username, id }) => (
            <div key={id}>
              <Item> {username}</Item>
              <hr />
            </div>
          ))}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default AsideMembers;
