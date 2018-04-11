import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

import Layout from '../components/Layout';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Layout title="Home" navigation={this.props.navigation}>
        <Text>Home Screen</Text>
        <Card title="CARD WITH DIVIDER">
          <View>
            <Image
              resizeMode="cover"
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
              }}
            />
            <Text>Parminder Klair</Text>
          </View>
        </Card>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate('About', {
              id: 86,
            })
          }
        />
        <Button
          title="Open drawer"
          onPress={() => this.props.navigation.navigate('DrawerToggle')}
        />
      </Layout>
    );
  }
}
