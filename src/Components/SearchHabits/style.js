import styled from "styled-components";
export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }

  .Col-input {
    flex: 1;
    .Search {
      width: 100%;
      max-width: 600px;
      background-color: var(--background-white);
      border-radius: 150px;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
      label {
        font-style: italic;
      }
      div {
        border-radius: 150px;
      }
    }
  }
`;
