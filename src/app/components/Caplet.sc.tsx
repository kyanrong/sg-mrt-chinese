import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 25px;
  display: flex;
`;

export const CapletSingle = styled.div`
  font-size: 16px;
  background-color: ${props => props.colors.bgColor};
  color: ${props => props.colors.fontColor};
  padding: 8px 12px;
  text-align: center;
  border-top-left-radius: 40%50px;
  border-bottom-left-radius: 40%50px;
  border-top-right-radius: 40%50px;
  border-bottom-right-radius: 40%50px;
`;

export const CapletLeft = styled(CapletSingle)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const CapletCenter = styled(CapletSingle)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const CapletRight = styled(CapletSingle)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

