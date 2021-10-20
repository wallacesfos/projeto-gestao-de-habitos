import styled, { css, keyframes } from "styled-components";

const defaultFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const superpositioned = css`
  position: relative;
  z-index: 1;
`;

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
`;

export const PopupCard = styled.div`
  height: 450px;
  width: calc(100% - 10px);
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--background);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 5px;
  transform: scale(0);
  animation: ${comeAnimation} 0.2s ease-out forwards;
`;

export const CardHeader = styled.h2`
  ${defaultFlex};
  ${superpositioned}
  height: 82px;
  width: 100%;
  background-color: #f2cfa5aa;
  padding: 0 40px 0 5px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  > svg {
    color: var(--orange-main);
    font-weight: bolder;
    font-size: 32px;
    position: absolute;
    top: 5px;
    right: 5px;
    ${buttonEffect}
  }
`;

export const CategoryIcon = styled.img`
  height: 200px;
  width: 200px;
  position: absolute;
  top: 60px;
  left: -15%;
  opacity: 50%;
`;

export const CardDescription = styled.section`
  ${defaultFlex}
  ${superpositioned}
  width: 262px;
  height: 169px;
  text-align: center;
  font-size: 18px;
`;

export const MoreInfo = styled.div`
  ${defaultFlex}
  align-self: flex-end;
  margin-right: 5px;
  width: 120px;
  height: 32px;
  font-size: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  ${buttonEffect}
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const StatItem = styled.div`
  height: 37px;
  width: 85px;
  max-width: 86px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  > p {
    flex: 1;
    text-align: center;
  }
  > img {
    height: 32px;
    width: 32px;
  }
`;

export const Button = styled.button`
  background-color: #ff6400;
  border-radius: 27px;
  width: 274px;
  height: 46px;
  border: unset;
  box-shadow: 0px 5.75px 5.75px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 20px;
  font-weight: bold;
  ${buttonEffect}
  &:hover {
    background-color: rgb(255, 131, 45);
  }
`;
