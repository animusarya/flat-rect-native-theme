import React, { Component } from 'react';
import Carousel from 'simple-carousel-react-native';
import { Text, View } from 'react-native';

export default class HomePage extends React.Component {
  render() {
    return (
<Carousel>
  <View>
    <Text>
      Page 1
    </Text>
  </View>

  <View>
    <Text>
      Page 2
    </Text>
  </View>

  <View>
    <Text>
      Page 3
    </Text>
  </View>
</Carousel>
 );
}
}
