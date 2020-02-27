import React from 'react';

import { Caplet, Content, Gif, GlobalStyle, Sign, SignContent, Wrapper } from './App.sc';
import './assets/font.css';

let App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Wrapper>
      <Content>
        <h1>SG MRTs in Chinese</h1>
        <Sign>
          <SignContent>
            <Caplet>EW25</Caplet>
            Chinese Garden
          </SignContent>
        </Sign>
        <Gif src={require('./assets/smrt-train.gif')} />
      </Content>
    </Wrapper>
  </React.Fragment>
);

export default App;
