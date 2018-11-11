import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import apolloClient from './utils/apolloClient';
import theme from './utils/theme';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/ContactPage';

// https://reactnavigation.org/docs/drawer-navigator.html
const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        drawerLabel: 'Home',
        // drawerLabel: () => null,
      },
    },
    About: {
      screen: AboutPage,
      navigationOptions: {
        drawerLabel: 'About',
      },
    },
    Cars: {
      screen: CarsPage,
      navigationOptions: {
        drawerLabel: 'Cars',
      },
    },
    Contact: {
      screen: ContactPage,
      navigationOptions: {
        drawerLabel: 'Contact',
      },
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
