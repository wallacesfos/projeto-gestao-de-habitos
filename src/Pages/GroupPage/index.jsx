import AsideMembers from "../../Components/AsideMembers";
import Nav from "../../Components/Nav";

const GroupPage = ({ group }) => {
  const { name, description, users_on_group: memberList } = group;

  return (
    <>
      <Nav dashboard />

      <section>
        <header>
          <h2> {name} </h2>
          <p>{description}</p>
        </header>
        <main>
          <AsideMembers {...{ memberList }} />
          <div>
            <h3> Metas </h3>
            <ul>
              <li>meta</li>
              <li>meta</li>
              <li>meta</li>
            </ul>
          </div>
          <div>
            <h3> Atividades </h3>
            <ul>
              <li>atividade</li>
              <li>atividade</li>
              <li>atividade</li>
            </ul>
          </div>
        </main>
      </section>
    </>
  );
};

export default GroupPage;
