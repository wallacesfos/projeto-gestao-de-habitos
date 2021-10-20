import styled, { css } from "styled-components";

const progressColor = css`
  ${({ how_much_achieved }) =>
    how_much_achieved < 30
      ? "var(--danger)"
      : how_much_achieved < 50
      ? "var(--orange-main)"
      : how_much_achieved < 100
      ? "var(--blue)"
      : "var(--success)"};
`;

export const AsideBar = styled.section`
  ul {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.li`
  text-align: center;
  margin: 10px auto;
  overflow: hidden;

  width: 95%;

  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > h4 {
    background-color: #ccc;
    width: 100%;
    padding: 5px;
  }

  .progressBar {
    width: ${({ how_much_achieved }) =>
      how_much_achieved < 82
        ? `${8 + how_much_achieved}%`
        : `${how_much_achieved}%`};
    height: 8px;

    border-radius: 5px;
    background-color: ${progressColor};

    position: relative;

    &::after {
      content: "${({ how_much_achieved }) => `${how_much_achieved}%`}";
      position: absolute;
      top: -15px;
      right: 0;
      color: ${progressColor};

      font-size: 14px;
    }
  }
`;
