import React from 'react';

import { Content, Gif, GlobalStyle, Wrapper } from './App.sc';

let App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Wrapper>
      <Content>
        <h1>SG MRTs in Chinese</h1>
        <Gif src={require('./smrt-train.gif')} />
      </Content>
    </Wrapper>
  </React.Fragment>
);

export default App;
