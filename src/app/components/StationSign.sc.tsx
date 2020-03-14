import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

export const Sign = styled.div`
  background-color: #bbbbbb;
  height: 100px;
  padding-top: 11px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  background-color: #285165;
  height: 100px;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rods = styled.div`
  width: 200px;
  height: 90px;
  border-left: 11px solid #bbbbbb;
  border-right: 11px solid #bbbbbb;
`;

export const Pinyin = styled.div`
  font-family: initial;
  font-size: 16px;
`;
