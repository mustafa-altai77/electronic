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
import {SafeAreaView} from 'react-native-safe-area-context';

const Signin = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignup = () => {
    navigation.navigate('Signup');
  };
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title={'Sign In'} />

        <Input lable={'E-mail'} placeholder={'exapmle@x.com'} />
        <Input isPassword lable={'Passsword'} placeholder={'*******'} />
        <View style={{flexDirection: 'row'}}>
          <Button style={styles.button} title="Sign In" />
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
