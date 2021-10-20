import AsideMembers from "../../Components/AsideMembers";
import GoalsSection from "../../Components/GoalsSection";
import Header from "../../Components/HeaderDashboard";
import Nav from "../../Components/Nav";
import { useGroup } from "../../Providers/GroupProvider";
import { HeaderBox, Container } from "./styles";

const GroupPage = () => {
  const { currentGroup } = useGroup();

  const { name, description, users_on_group: memberList, goals } = currentGroup;

  return (
    <Container>
      <Header />

      <section>
        <HeaderBox>
          <h2> {name} </h2>
          <p>{description}</p>
        </HeaderBox>
        <main>
          <AsideMembers {...{ memberList }} />
          <GoalsSection {...{ goals }} />
          {/* <div>
            <h3> Atividades </h3>
            <ul>
              <li>atividade</li>
              <li>atividade</li>
              <li>atividade</li>
            </ul>
          </div> */}
        </main>
      </section>
    </Container>
  );
};

export default GroupPage;
