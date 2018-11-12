import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';

import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const MainContainer = styled.View`
  flex: 1;
  width: 320;
  height: 100;
  flex-direction: row;
  justify-content: center;
  margin-top: 50;
`;

const LeftContainer = styled.View`
  flex: 1;
  width: 200;
  height: 80;
`;

const RightContainer = styled.View`
  flex: 1;
  width: 200;
  height: 80;
`;

const Title = styled.Text`
  font-size: 20;
  padding-left: 15;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 18;
  padding-left: 15;
  color: #d1d6e3;
  font-weight: 500;
`;

const IconView = styled.View`
  flex-direction: row;
  padding-left: 60;
`;

export default class SectionOne extends Component {
  render() {
    return (
      <MainContainer>
        <LeftContainer>
          <Title>Find your Flat</Title>
          <SubTitle>55 result find your area</SubTitle>
        </LeftContainer>
        <RightContainer>
          <IconView>
            <Ionicons name="md-search" size={29} color="#d1d6e3" />
            <Ionicons
              name="md-flashlight"
              size={29}
              color="#d1d6e3"
              style={{ paddingLeft: 10 }}
            />
          </IconView>
        </RightContainer>
      </MainContainer>
    );
  }
}
