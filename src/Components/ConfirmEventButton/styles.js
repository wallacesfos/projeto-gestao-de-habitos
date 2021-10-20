import styled, { css, keyframes } from "styled-components";

const buttonEffect = css`
  cursor: pointer;
  transition: transform 0.1s linear;
  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.05);
    }
  }
  &:active {
    transform: scale(0.95);
  }
`;

const comeAnimation = keyframes`
    0% {
        transform: scale(0)
    }
    90% {
        transform: scale(1.1)
    }
    100% {
        transform: scale(1)
    }
`;

export const DeleteButton = styled.button`
  background-color: var(--danger);
  background-color: ${({ cancelButton }) =>
    cancelButton ? "var(--color-cinzaEscuro)" : "var(--danger)"};
  border-radius: 27px;
  width: 274px;
  height: 46px;
  border: unset;
  box-shadow: 0px 5.75px 5.75px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 20px;
  font-weight: bold;
  ${buttonEffect}
  animation: ${comeAnimation} 0.2s ease-out forwards;

  @media (min-width: 1024px) {
    &:hover {
      background-color: rgb(255, 131, 45);
    }
  }
`;

export const ConfirmBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > button {
    width: 40%;
  }
`;
