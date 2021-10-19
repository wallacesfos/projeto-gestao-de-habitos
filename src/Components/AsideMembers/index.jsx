import { AsideBar } from "./style";

const AsideMembers = ({ memberList }) => {
  return (
    <AsideBar>
      <div className="headerBox">
        <img alt="Ícone membros" />
        <h3> Membros </h3>
      </div>
      <ul>
        {memberList.map(({ username, id }) => (
          <li key={id}> {username} </li>
        ))}
      </ul>
    </AsideBar>
  );
};

export default AsideMembers;
