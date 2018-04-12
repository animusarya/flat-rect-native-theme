// http://chir.ag/projects/name-that-color/
export const colors = {
  caribbeanGreen: '#00D1B2',
};

export const variables = {
  primary: colors.caribbeanGreen,
};

const Theme = {
  // react-native-clean-form //
  Button: {
    backgroundColor: '#4286dd',
    color: '#fff',
    fontSize: 12,
    fontWeight: 700,
    height: 45,
  },
  ErrorMessage: {
    color: 'red',
    fontSize: 10,
    marginBottom: 15,
    textAlign: 'right',
  },
  Fieldset: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    labelColor: '#909090',
    labelSize: 9,
    labelWeight: 700,
    labelHeight: 25,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  FormGroup: {
    borderColor: '#ebebeb',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    errorBorderColor: 'red',
    height: 55,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  BaseInput: {
    placeholderColor: '#c9c9c9',
    fontSize: 16,
    lineHeight: 18,
  },
  Input: {
    color: '#313131',
  },
  Label: {
    color: '#bfc2c9',
    fontSize: 16,
    stackedHeight: 40,
  },
  Select: {},
  // react-native-clean-form //
};

export default Theme;
