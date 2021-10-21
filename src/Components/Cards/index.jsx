import { ContainerCard, H1, P } from "./style.js";

function Cards({
  title = "Title",
  description = "Description",
  category = "Category",
  usersOnGroup = 0,
  id,
  callback,
  placeholder,
}) {
  return (
    <ContainerCard>
      <H1>{title}</H1>
      <P>{description}</P>
      <P>{category}</P>
      <P>{usersOnGroup}</P>
      <button className="btn-primary" onClick={() => callback()}>
        {placeholder}
      </button>
    </ContainerCard>
  );
}
export default Cards;
