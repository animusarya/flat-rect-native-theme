import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

import styled from 'styled-components';
import Layout from '../components/Layout';
import MainScreen from '../components/MainScreen';
import ImageSlider from '../components/ImageSlider';

const Container = styled.View`
  width: 500;
  height: 500;
`;

const Title = styled.Text`
  font-size: 22;
  color: black;
  font-weight: bold;
  margin-left: 12;
  margin-top: 12;
`;

const SubTitle = styled.Text`
  font-size: 19;
  color: black;
  font-weight: 400;
  margin-left: 12;
  font-family: sans-serif;
`;

const Para = styled.Text`
  font-size: 19;
  color: blue;
  font-weight: bold;
  margin-left: 12;
  font-family: sans-serif;
`;

const SecondContainer = styled.View`
  width: 315;
  height: 210;
`;

const ViewSlider = styled.View`
  width: 240;
  height: 80;
  background-color: #4d6ce2;
  margin-left: 30;
  border-radius: 40;
  flex-direction: row;
  flex: 1;
`;

const CirceleButton = styled.View`
  width: 70;
  height: 70;
  border-radius: 35;
  background-color: #ffffff;
  top: 5;
  left: 4;
`;

const RightArow = styled.Image`
  width: 55;
  height: 55;
  top: 5;
  left: 9;
  color: white;
`;

const SubTitleTwo = styled.Text`
  font-size: 19;
  color: white;
  margin-left: 15;
  font-weight: 400;
  flex-direction: row;
  font-family: sans-serif;
  flex: 1;
  top: 23;
`;

export default class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Layout title="About">
          <TouchableOpacity>
            <Container>
              <MainScreen />
            </Container>
          </TouchableOpacity>
          <SecondContainer>
            <Title>Lovern Apartment</Title>
            <SubTitle>
              It is a long established fact that a reader will be distracted by
              it has a more-or-less normal distribution of letters using us
            </SubTitle>
            <TouchableOpacity onPress={this._onPressButton}>
              <Para>Read more</Para>
            </TouchableOpacity>
          </SecondContainer>
          <ViewSlider>
            <TouchableOpacity onPress={this._onPressButton}>
              <CirceleButton>
                <RightArow source={require('../assets/Right.png')} />
              </CirceleButton>
            </TouchableOpacity>
            <SubTitleTwo>slider to book</SubTitleTwo>
          </ViewSlider>
          <ImageSlider />
          <Button title="Go Home" onPress={() => navigate('Home')} />
        </Layout>
      </ScrollView>
    );
  }
}
