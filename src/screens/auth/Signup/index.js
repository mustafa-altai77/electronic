import React, {useContext, useState} from 'react';
import {styles} from './styles';
import {View, Text, Alert} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/input';
import CheckBox from '../../../components/Check';
import Button from '../../../components/Button';
import Seprator from '../../../components/Seprator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {request} from '../../../utils/request';
import {signup} from '../../../utils/backendCalls';
import {UserContext} from '../../../../App';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);
  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  const onBack = () => {
    navigation.goBack();
  };
  const onChange = (key, value) => {
    //...v mean exist value, [key]: value // mean new value a
    setValues(v => ({...v, [key]: value}));
  };
  const onSubmit = async () => {
    try {
      if (
        !values?.fullName ||
        !values?.email ||
        !values?.password ||
        !values.confirmPassword
      ) {
        Alert.alert('All fileds are required');
        return;
      }
      if (values?.password !== values.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }
      if (!checked) {
        Alert.alert('Please agree to the tearm');
        return;
      }
      const token = await signup(values);
      setUser({token});
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title={'Sign Up'} />
        <Input
          value={values.fullName}
          onChangeText={v => onChange('fullName', v)}
          lable={'Full Name'}
          placeholder={'John Doe'}
        />
        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
          lable={'E-mail'}
          placeholder={'exapmle@x.com'}
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword
          lable={'Passsword'}
          placeholder={'*******'}
        />
        <Input
          value={values.confirmPassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword
          lable={'Confirm Password'}
          placeholder={'*******'}
        />
        <View style={styles.agreeRow}>
          <CheckBox checked={checked} onCheck={setChecked} />
          <Text style={styles.title}>
            I agree with the{' '}
            <Text style={styles.agreeTextBold}>Tearm & Condition</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={onSubmit} style={styles.button} title="Sign up" />
        </View>
        <Seprator text={'or Sigup with'} />
        <GoogleLogin />
        <Text onPress={onSignIn} style={styles.footerText}>
          Already have an account ?
          <Text style={styles.footerLink}> Sign In</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Signup;
