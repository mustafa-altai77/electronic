import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../utils/colors';
import {View, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/input';
import CheckBox from '../../../components/Check';
import Button from '../../../components/Button';
import Seprator from '../../../components/Seprator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {};

  return (
    <View style={styles.container}>
      <AuthHeader title={'Sign Up'} />
      <Input lable={'Name'} placeholder={'John Doe'} />
      <Input lable={'E-mail'} placeholder={'exapmle@x.com'} />
      <Input isPassword lable={'Passsword'} placeholder={'*******'} />
      <View style={styles.agreeRow}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text style={styles.title}>
          I agree with the{' '}
          <Text style={styles.agreeTextBold}>Tearm & Condition</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign up" />
      <Seprator text={'or Sigup with'} />
      <GoogleLogin />
      <Text onPress={onSignIn} style={styles.footerText}>
        Already have an account ?<Text style={styles.footerLink}> Sign In</Text>
      </Text>
    </View>
  );
};
export default Signup;
