import React, {useState} from 'react';
import {styles} from './styles';
import {Pressable, Text, TextInput, View, Image} from 'react-native';
const Input = ({lable, placeholder, isPassword, value, onChangeText}) => {
  const [isPasswordVisable, setIsPasswordVisable] = useState(true);
  const onEyePress = () => {
    setIsPasswordVisable(!isPasswordVisable);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lable}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisable}
          placeholder={placeholder}
          style={styles.input}
        />

        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
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
