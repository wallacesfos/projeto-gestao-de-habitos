import styled from "styled-components";

export const Image = styled.img`
  height: 500px;
`;

export const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
  .divTexts {
    div {
      width: 100vw;
      min-width: 100px;
      max-width: 300px;
    }
  }
`;

export const Title = styled.h2`
  font-family: Arial;
  color: #37474f;
`;

export const Login = styled.span`
  color: #ff6400;
  cursor: pointer;
`;

export const Block = styled.div`
  width: 100%;
  button {
    width: 100vw;
    min-width: 100px;
    max-width: 300px;
    border-radius: 150px;
  }
`;

export const Cadastre = styled.p`
  font-family: arial;
  font-size: 14px;
`;
