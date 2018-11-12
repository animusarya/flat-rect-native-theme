import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';

import styled from 'styled-components';
import Layout from '../components/Layout';
import SectionSecond from '../components/SectionSecond';
import SectionThree from '../components/SectionThree';
import AlertButton from '../components/elements/AlertButton';
import SectionOne from '../components/SectionOne';

export default class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Layout title="Home">
          <SectionOne />
          <SectionSecond />
          <SectionThree />
          <AlertButton />
          <Button title="Go About" onPress={() => navigate('About')} />
        </Layout>
      </ScrollView>
    );
  }
}
