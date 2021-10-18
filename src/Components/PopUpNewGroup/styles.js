import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 5rem;
  max-width: fit-content;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--background-white);
  margin: 2rem 0;
  > h3 {
    margin-right: 1.5rem;
  }
`;
