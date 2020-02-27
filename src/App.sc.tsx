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
  text-align: center;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 50px;
  padding-top: 15px;
`;

export const Gif = styled.img`
  width: 400px;
  border-radius: 50px;
`;

export const Sign = styled.div`
  background-color: #bbbbbb;
  height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignContent = styled.div`
  background-color: #285165;
  height:90px;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Caplet = styled.div`
  background-color: #00A851;
  color: white;
  padding: 10px 20px;
  margin-right: 20px;
  text-align: center;
  border-top-left-radius: 30%50px;
  border-bottom-left-radius: 30%50px;
  border-top-right-radius: 30%50px;
  border-bottom-right-radius: 30%50px;
`;

