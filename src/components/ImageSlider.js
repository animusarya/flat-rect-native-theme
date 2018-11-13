import React, { Component } from 'react';
import Carousel from 'simple-carousel-react-native';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

const FirstImage = styled.Image`
  flex: 1;
  width: 700;
  height: 700;
  resize-mode: cover;
`;

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Carousel>
        <View>
          <Text>
            <FirstImage source={require('../assets/buildingfirst.jpeg')} />
          </Text>
        </View>

        <View>
          <Image source={require('../assets/secondBuilding.jpeg')} />
        </View>

        <View>
          <Image source={require('../assets/thirdimage.jpeg')} />
        </View>
      </Carousel>
    );
  }
}
