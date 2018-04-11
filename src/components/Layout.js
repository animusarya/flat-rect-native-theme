import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';
import styled from 'styled-components';

import Header from '../components/Header';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

export default class Layout extends React.Component {
  render() {
    return (
      <Grid>
        <Row size={15}>
          <Header title={this.props.title} navigation={this.props.navigation} />
        </Row>
        <Row size={85}>
          <Container>{this.props.children}</Container>
        </Row>
      </Grid>
    );
  }
}
