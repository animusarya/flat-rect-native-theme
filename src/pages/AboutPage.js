import React from 'react';
import { Button, Text } from 'react-native';

import Layout from '../components/Layout';

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout title="About">
        <Text>About Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </Layout>
    );
  }
}
