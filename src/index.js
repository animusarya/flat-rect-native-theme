import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import apolloClient from './utils/apolloClient';
import theme from './utils/theme';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CarsPage from './pages/CarsPage';

const RootStack = DrawerNavigator(
  {
    Home: {
      screen: HomePage,
    },
    About: {
      screen: AboutPage,
    },
    Cars: {
      screen: CarsPage,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <RootStack />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
