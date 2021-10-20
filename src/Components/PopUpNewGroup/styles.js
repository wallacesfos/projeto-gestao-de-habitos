import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 5rem;
  min-width: 100vw;
  max-width: fit-content;
  border-radius: 8px;
  background-color: var(--background-white);
  margin: 2rem 0;
  > h3 {
    margin-right: 1.5rem;
  }
  @media (min-width: 1400px) {
    flex-direction: row;
    padding: 1.5rem;
  }
`;
