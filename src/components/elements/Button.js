import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Container = styled(Button)`
  background-color: red;
  border-radius: 4;
  margin-horizontal: 13;
  border-width: 0;
`;

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
});

const MyButton = ({ children, ...other }) => (
  <Container textStyle={styles.buttonText} activeOpacity={0.7} {...other}>
    {children}
  </Container>
);

export default MyButton;
