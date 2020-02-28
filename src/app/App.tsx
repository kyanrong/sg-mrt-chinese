import React from 'react';

import '../assets/font.css';

import { StationSign } from './components';

import { Content, Gif, GlobalStyle, Wrapper } from './App.sc';

let App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Wrapper>
      <Content>
        <h1>SG MRTs in Chinese</h1>
        <StationSign></StationSign>
        <Gif src={require('../assets/smrt-train.gif')} />
      </Content>
    </Wrapper>
  </React.Fragment>
);

export default App;
