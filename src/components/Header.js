import React from 'react';
import { Button, Text } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

export default class Header extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <Grid style={{ paddingTop: 50 }}>
        <Col>
          <Button
            title="Menu"
            onPress={() => this.props.navigation.navigate('DrawerToggle')}
          />
        </Col>
        <Col>
          <Text>{this.props.title}</Text>
        </Col>
        <Col />
      </Grid>
    );
  }
}
