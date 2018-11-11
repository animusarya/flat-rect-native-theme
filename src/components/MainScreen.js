import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity, Image, View, Text, } from 'react-native';
import styled from 'styled-components';

const MainContainer = styled.View`
  width: 315;
  height: 535;
  flex: 1;
  background-color: #eee;
  margin-top: -10;
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
  background-color: #5b5b59;
  top: 18;
  left: 12;
  width: 100;
  height: 40;
  border-radius: 15;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 18;
  color: white;
  font-weight: bold;
  margin-top: 4;
`;

export default class MainScreen extends Component {
  render() {
    return (
      <MainContainer>
        <FirstContainer>
          <MapImage source= {require('../assets/table.jpeg')} />
        </FirstContainer>
        <SecondContainer>
          <TouchableOpacity onPress={this._onPressButton}>
            <Title>
             £900/month
            </Title>
         </TouchableOpacity>
        </SecondContainer>
      </MainContainer>
    );
  }
}

AppRegistry.registerComponent('MainScreen', () => MainScreen);