import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, } from 'react-native';

import styled from 'styled-components';

const MainContainer = styled.View`
  width: 200;
  height: 200;
  flex: 1;
  background-color: #eee;
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
`;

const SecondContainer = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 23;
  margin-top: 165;
  font-weight: bold;
  color: white;
  margin-left: 20;
`;


export default class BackgroundImage extends Component {
  render() {
    return (
      <MainContainer>
        <FirstContainer>
            <MapImage  source={require('../assets/table.jpeg')} />
        </FirstContainer>
        <SecondContainer>
          <Title>
            Lovern Apartment
          </Title>
        </SecondContainer>
      </MainContainer>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);