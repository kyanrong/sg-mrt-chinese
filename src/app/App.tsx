import React, { Component } from 'react';

import pinyin from 'chinese-to-pinyin';
import { connect } from 'react-redux';

import '../assets/font.css';

import { Searchbox, StationSign } from './components';
import { getSelectedStation, getStations } from './selectors';

import { fetchStations, updateSelectedStation } from './actions';
import { Content, Gif, GlobalStyle, SearchboxWrapper, Wrapper } from './App.sc';

type AppProps = {
  fetchStations: Function,
  updateSelectedStation: Function,
  stations: object[],
  selected: object,
};

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.fetchStations();
  }

  render() {
    const { selected, stations } = this.props;
    
    return (
      <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Content>
          <StationSign station={selected}></StationSign>
          <h1>SG MRTs w Chinese</h1>
          <SearchboxWrapper>
            <Searchbox options={stations} onSelectStation={this.props.updateSelectedStation.bind(this)} />
          </SearchboxWrapper>
          <Gif src={require('../assets/smrt-train.gif')} />
        </Content>
      </Wrapper>
    </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    selected: getSelectedStation(state),
    stations: getStations(state),
  }),
  dispatch => ({
    fetchStations: () => dispatch(fetchStations()),
    updateSelectedStation: stn => {
      if (stn) {
        dispatch(updateSelectedStation({ ...stn, pinyin: pinyin(stn.label_chinese)}));
      }
    }
  })
)(App);
