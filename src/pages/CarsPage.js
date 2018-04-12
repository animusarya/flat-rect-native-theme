import React from 'react';
import { Text, View } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Layout from '../components/Layout';

const allCarsQuery = gql`
  {
    allCars {
      id
      title
    }
  }
`;

export default class CarsPage extends React.Component {
  render() {
    return (
      <Layout title="Cars">
        <Text>Cars Screen</Text>
        <Query query={allCarsQuery}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;

            return data.allCars.map(car => (
              <View key={car.id}>
                <Text>{car.title}</Text>
              </View>
            ));
          }}
        </Query>
      </Layout>
    );
  }
}
