import React from 'react';
import styled from 'styled-components';
import Image from 'react-native-scalable-image';

import dummy from '../../assets/dummy/food-2.jpg';

const Container = styled.Image``;
const ContainerResponsive = styled(Image)``;

const MyImage = ({ keepRatio, ...props }) => {
  if (keepRatio) {
    return <ContainerResponsive defaultSource={dummy} {...props} />;
  }

  return (
    <Container
      defaultSource={dummy}
      resizeMode="cover"
      resizeMethod="scale"
      {...props}
    />
  );
};

export default MyImage;