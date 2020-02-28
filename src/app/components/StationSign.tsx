import React from 'react';

import { Caplet, Content, Wrapper } from './StationSign.sc';

type StationSignProps = {

};

const StationSign = ({}: StationSignProps) => (
  <Wrapper>
    <Content>
      <Caplet>EW25</Caplet>
      Chinese Garden
    </Content>
  </Wrapper>
);

export default StationSign;
