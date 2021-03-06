import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf8e8;
    font-family: 'Ocean Sans';
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 60px;
  background-color: #FBFEFE;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
`;

export const Gif = styled.img`
  width: 400px;
  border-radius: 50px;
`;
