import React from 'react';

import Caplet from './Caplet';

import { Content, Pinyin, Rods, Sign, Wrapper } from './StationSign.sc';

interface IProps {
  station: {
    pinyin: string,
    label: string,
    label_chinese: string,
    value: string,
  }
};

const StationSign: React.FC<IProps> = ({ station }) => (
  <Wrapper>
    <Rods />
    <Sign>
      <Content>
        <Caplet code={station.value} />
        <div>
          {station.label}
          <br />
          {station.label_chinese}
          <br />
          <Pinyin>{station.pinyin}</Pinyin>
        </div>
        <div></div>
      </Content>
    </Sign>
  </Wrapper>
);

export default StationSign;
