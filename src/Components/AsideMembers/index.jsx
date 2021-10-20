import GroupCardSection from "../GroupSection";
import { AsideBar, Item } from "./style";

const AsideMembers = ({ memberList }) => {
  return (
    <AsideBar>
      <GroupCardSection variant="members">
        <ul>
          {memberList.map(({ username, id }) => (
            <>
              <Item key={id}> {username} </Item>
              <hr />
            </>
          ))}
        </ul>
      </GroupCardSection>
    </AsideBar>
  );
};

export default AsideMembers;
