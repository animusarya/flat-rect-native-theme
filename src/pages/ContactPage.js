import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout title="Contact">
        <ContactForm
          handleSubmit={values => console.log('contact values', values)}
        />
      </Layout>
    );
  }
}
