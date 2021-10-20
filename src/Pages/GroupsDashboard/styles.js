import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  min-width: 100vw;
  padding: 5rem;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin-bottom: 5rem;
    text-align: center;
  }
`;

export const PictureContainer = styled.div`
  margin-right: 2rem;
  width: 220px;
  height: 103px;
  > img {
    max-width: 100%;
    height: auto;
  }
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
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: fit-content;
  justify-content: flex-start;
  margin: 0 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;
