import React, { Component } from 'react';
import Carousel from 'simple-carousel-react-native';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

const FirstImage = styled.Image`
  flex: 1;
  width: 690;
  height: 700;
  resize-mode: cover;
`;

const ImageView = styled.View`
  flex: 1;
  width: 320;
  height: 700;
  resize-mode: cover;
`;

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Carousel>
        <ImageView>
          <Text>
            <FirstImage source={require('../assets/buildingfirst.jpeg')} />
          </Text>
        </ImageView>
        <ImageView>
          <Image source={require('../assets/secondBuilding.jpeg')} />
        </ImageView>
        <ImageView>
          <Image source={require('../assets/thirdimage.jpeg')} />
        </ImageView>
      </Carousel>
    );
  }
}
