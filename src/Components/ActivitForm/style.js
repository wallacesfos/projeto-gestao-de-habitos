import styled, { css, keyframes } from "styled-components";

const defaultFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const BackdropContainer = styled.div`
  ${defaultFlex};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(1px);
  z-index: 1;

  padding: 10px;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 30px 0;
  border-radius: 10px;

  animation: ${comeAnimation} 0.2s ease-out forwards;

  @media (max-width: 1103px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
`;

export const Title = styled.h2`
  font-family: Arial;
  color: #37474f;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const InputsBoxs = styled.div`
  margin-left: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;

  width: 50%;
  max-width: 350px;

  .cancel {
    background-color: var(--color-cinzaEscuro) !important;
    margin-left: 10px;
  }
`;
