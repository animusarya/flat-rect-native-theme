import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Button,
} from 'react-native';

import styled from 'styled-components';

const MainContainer = styled.View`
  margin-left: 70;
  width: 140;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const ButtonContainer = styled.View`
  width: 80;
  height: 50;
  border-radius: 10;
  align-items: center;
  padding-top: 8;
`;

export default class AlertButton extends Component {
  _onPress() {
    Alert.alert(
      'Go another screen',
      'About screen',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
    <MainContainer>
        <TouchableOpacity onPress={this._onPressButton}>
      <ButtonContainer>
        <Button
          onPress={this._onPress}
          title="Go to"
          color="blue"
          accessibilityLabel="Tap on Me"
        />
      </ButtonContainer>
      </TouchableOpacity>
    </MainContainer>
    );
  }
}
