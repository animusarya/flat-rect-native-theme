import React, { Component } from 'react';
import {AppRegistry, Image, View, Text, } from 'react-native';

import styled from 'styled-components';

const MainContainer = styled.View`
  width: 150;
  height: 200;
  flex: 1;
  background-color: #eee;
  border-radius: 25px;
`;

const FirstContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MapImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
  border-radius: 20px;
`;

const SecondContainer = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 22;
  margin-top: 165;
  font-weight: bold;
  color: white;
  margin-left: 20;
`;

export default class SecondBgImage extends Component {
  render() {
    return (
      <MainContainer>
        <FirstContainer>
            <MapImage  source={require('../assets/flat.jpg')} />
        </FirstContainer>
        <SecondContainer>
          <Title>
          Cozy Flat222
          </Title>
        </SecondContainer>
      </MainContainer>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => SecondBgImage);