import React from 'react';
import { Button, Text } from 'react-native';

import Layout from '../components/Layout';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <Layout title="About" navigation={this.props.navigation}>
        <Text>About Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </Layout>
    );
  }
}
