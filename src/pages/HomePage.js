import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../components/Layout';
import SectionSecond from '../components/SectionSecond';

const MainContainer = styled.View`
  flex: 1;
  width: 320;
  height: 100;
  flex-direction: row;
  justify-content: center;
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
  font-size: 12;
  padding-left: 15;
  color: #d1d6e3;
  font-weight: bold;
`;

const IconView = styled.View`
  flex-direction: row;
  padding-left: 60;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView>
        <Layout title="Home">
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
          <SectionSecond />
        </Layout>
      </ScrollView>
    );
  }
}
