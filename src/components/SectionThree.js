import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text, View, Image,} from 'react-native';

import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import SecondBgImage from './SecondBgImage';

const MainContainer = styled.View`
  flex: 1;
  width: 300;
  height: 500;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-start;
`;

const LeftView = styled.View`
  flex: 1;
  width: 190;
  height: 200;
  margin-top: 20;
  border-radius: 25px;
  background-color: white;
`;

const RightView = styled.View`
  flex: 1;
  width: 220;
  height: 250;
  background-color: blue;
  border-radius: 25px;
  left: 15;
`;

const Title = styled.Text`
  font-size: 23;
  text-align: left;
  font-weight: 500;
  margin-left: 10;
  margin-top: 10;
`;

const SubTitle = styled.Text`
  font-size: 15;
  text-align: left;
  font-weight: 500;
  margin-left: 10;
  color: grey;
`;

const ReviewImage = styled.Image`
  width: 30;
  height: 30;
  margin-left: 5;
  border-radius: 12;
`;

const Container = styled.View`
  flex: 1;
  width: 300;
  height: 500;
  flex-direction: row;
`;

export default class SectionThree extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
      <MainContainer>
        <RightView>
          <SecondBgImage />
        </RightView>
        <LeftView>
          <Title>£900/month</Title>
          <SubTitle>Double family house</SubTitle>
          <Container>
            <ReviewImage  source={require('../assets/bulding.jpg')} />
            <ReviewImage  source={require('../assets/flat.jpg')} />
            <ReviewImage  source={require('../assets/table.jpeg')}/>
          </Container>
        </LeftView>
      </MainContainer>
         </TouchableOpacity>
    );
  }
}
