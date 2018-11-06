import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BackgroundImage from './BackgroundImage';
import styled from 'styled-components';

const MainContainer = styled.View`
  flex: 1;
  width: 300;
  height: 500;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const LeftView = styled.View`
  flex: 1;
  width: 100;
  height: 200;
  background-color: red;
  margin-top: 20;
`;

const RightView = styled.View`
  flex: 1;
  width: 210;
  height: 250;
  background-color: blue;
`;

const Title = styled.Text`
  font-size: 23;
  text-align: left;
  font-weight: 500;
  margin-left: 10;
`;

const SubTitle = styled.Text`
  font-size: 20;
  text-align: left;
  font-weight: 500;
  margin-left: 10;
`;

export default class SectionSecond extends Component {
  render() {
    return (
      <MainContainer>
        <LeftView>
           <Title>£900/month</Title>
           <SubTitle>Double family house</SubTitle>
         </LeftView>
        <RightView>
        <BackgroundImage />
        </RightView>
      </MainContainer>
    );
  }
}
