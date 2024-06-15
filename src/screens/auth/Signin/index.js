import React, {useContext, useState} from 'react';
import {styles} from './styles';
import {View, Text, Alert} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import Seprator from '../../../components/Seprator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {login} from '../../../utils/backendCalls';
import {UserContext} from '../../../../App';

const Signin = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);

  const onSignup = () => {
    navigation.navigate('Signup');
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
      if (!values?.email || !values?.password) {
        Alert.alert('All fileds are required');
        return;
      }

      const token = await login(values);
      setUser({token});
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title={'Sign In'} />

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
        <View style={{flexDirection: 'row'}}>
          <Button onPress={onSubmit} style={styles.button} title="Sign In" />
        </View>
        <Seprator text={'or Sigup with'} />
        <GoogleLogin />
        <Text onPress={onSignup} style={styles.footerText}>
          Dont have an account ?<Text style={styles.footerLink}> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Signin;
