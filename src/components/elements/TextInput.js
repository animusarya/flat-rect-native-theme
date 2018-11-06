import React from 'react';
import styled from 'styled-components';

const Container = styled.TextInput`
  background-color: ${props => (props.lite ? 'transparent' : '#949599')};
  border-radius: ${props => (props.lite ? 0 : 4)};
  border-width: 0;
  border-bottom-width: ${props => (props.lite ? 1 : 0)};
  border-bottom-color: ${props => (props.lite ? '#E0E6EF' : 'transparent')};
  padding-vertical: 12;
  padding-horizontal: ${props => (props.lite ? 0 : 15)};
  margin-bottom: 10;
  margin-left: 15;
  margin-right: 15;
  color: ${props => (props.lite ? props.theme.textColor : '#fcfcfd')};
  font-size: 18;
  min-height: 45;
`;

const TextInput = ({ lite, ...props }) => (
  <Container
    lite={lite}
    underlineColorAndroid="transparent"
    placeholderTextColor="#DADBDC"
    {...props}
  />
);

export default TextInput;