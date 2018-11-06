import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const Container = styled.Text`
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.textColor};
  font-family: ${props => props.fontFamily};
`;

const MyText = props => {
  const { style, children, primary, light, semibold, bold, ...other } = props;

  let fontFamily = primary
    ? theme.primaryFontFamily
    : theme.secondaryFontFamily;

  if (light) {
    fontFamily = `${fontFamily}-light`;
  }
  if (semibold) {
    fontFamily = `${fontFamily}-semibold`;
  }
  if (bold) {
    fontFamily = `${fontFamily}-bold`;
  }

  return (
    <Container style={style} fontFamily={fontFamily} {...other}>
      {children}
    </Container>
  );
};

export default MyText;