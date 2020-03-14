import React from 'react';

import { CapletCenter, CapletLeft, CapletRight, CapletSingle, Wrapper } from './Caplet.sc';

const getColors = code => {
  const stns = {
    NS: { bgColor: '#F03628', fontColor: 'white' },
    EW: { bgColor: '#00A94F', fontColor: 'white'  },
    CG: { bgColor: '#00A94F', fontColor: 'white' },
    NE: { bgColor: '#75428F', fontColor: 'white' },
    CC: { bgColor: '#FA9E23', fontColor: 'black' },
    DT: { bgColor: '#066CB8', fontColor: 'white' },
    BP: { bgColor: '#688176', fontColor: 'white' },
    STC: { bgColor: '#688176', fontColor: 'white' },
    SE: { bgColor: '#688176', fontColor: 'white' },
    SW: { bgColor: '#688176', fontColor: 'white' },
    PTC: { bgColor: '#688176', fontColor: 'white' },
    PE: { bgColor: '#688176', fontColor: 'white' },
    PW: { bgColor: '#688176', fontColor: 'white' },
  };

  const match = code.match(/[a-zA-Z]+/g);

  return stns[match];
};

interface IProps {
  code: string,
}

const Caplet: React.FC<IProps> = ({ code }) => {
  const values = code.split('-');

  switch (values.length) {
    case 1:
      return (
        <Wrapper>
          <CapletSingle colors={getColors(values[0])}>{values[0]}</CapletSingle>
        </Wrapper>
      );
    case 2:
      return (
        <Wrapper>
          <CapletLeft colors={getColors(values[0])}>{values[0]}</CapletLeft>
          <CapletRight colors={getColors(values[1])}>{values[1]}</CapletRight>
        </Wrapper>
      );
    case 3:
      return (
        <Wrapper>
          <CapletLeft colors={getColors(values[0])}>{values[0]}</CapletLeft>
          <CapletCenter colors={getColors(values[1])}>{values[1]}</CapletCenter>
          <CapletRight colors={getColors(values[2])}>{values[2]}</CapletRight>
        </Wrapper>);
  }
};

export default Caplet;
