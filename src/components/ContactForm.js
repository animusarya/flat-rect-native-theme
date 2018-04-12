import React from 'react';
import { Button } from 'react-native-elements';
import { withFormik } from 'formik';
import Yup from 'yup';
import {
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Input,
  Label,
} from 'react-native-clean-form';

class ContactForm extends React.Component {
  render() {
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <FormGroup>
              <Label>Your name</Label>
              <Input
                placeholder="Your full name"
                onChangeText={text => this.props.setFieldValue('name', text)}
                value={this.props.values.name}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                placeholder="esbenspetersen@gmail.com"
                onChangeText={text => this.props.setFieldValue('email', text)}
                value={this.props.values.email}
              />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <Input
                placeholder="your message"
                onChangeText={text => this.props.setFieldValue('message', text)}
                value={this.props.values.message}
              />
            </FormGroup>
            <Button onPress={this.props.handleSubmit} title="Submit" />
          </Fieldset>
        </FieldsContainer>
      </Form>
    );
  }
}

const enhancer = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Full name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'ContactForm', // helps with React DevTools
});

export default enhancer(ContactForm);
