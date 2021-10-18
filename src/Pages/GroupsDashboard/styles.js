import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  max-width: 100vw;
  padding: 5rem;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-around;
`;

export const PictureContainer = styled.div`
  margin-right: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: fit-content;
  align-items: center;
`;

export const MyGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin-bottom: 5rem;
    text-align: center;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: fit-content;
  margin: 0 5rem;
`;
