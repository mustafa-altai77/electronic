import React, {useState} from 'react';
import {styles} from './styles';
import {Pressable, Text, TextInput, View, Image} from 'react-native';
const Input = ({lable, placeholder, isPassword}) => {
  const [isPasswordVisable, setIsPasswordVisable] = useState(true);
  const onEyePress = () => {
    setIsPasswordVisable(!isPasswordVisable);
    console.log(isPassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && isPasswordVisable}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.image}
              source={
                isPasswordVisable
                  ? require('../../assets/view.png')
                  : require('../../assets/eye_close.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
