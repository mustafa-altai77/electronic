import React, {useState} from 'react';
import {styles} from './styles';
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
const Input = ({
  lable,
  type,
  isPassword,
  value,
  onChangeText,
  style,
  options,
  placeholder,
  ...props
}) => {
  const [isPasswordVisable, setIsPasswordVisable] = useState(true);
  const [isPickerModelVisable, setPickerModelVisable] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisable(!isPasswordVisable);
  };
  const onselect = opt => {
    onChangeText(opt);
    setPickerModelVisable(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lable}</Text>
      {type === 'picker' ? (
        <Pressable
          onPress={() => setPickerModelVisable(true)}
          style={styles.inputContainer}>
          {value ? (
            <Text style={[styles.input]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder]}>{placeholder}</Text>
          )}
          <Image
            style={styles.arrow}
            source={require('../../assets/arrow.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisable}
            style={[styles.input, style]}
            {...props}
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
      )}
      <Modal transparent visible={isPickerModelVisable}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPickerModelVisable(false)}
          style={styles.modalWarpper}>
          <TouchableOpacity activeOpacity={1} style={styles.modelContent}>
            <Text style={styles.headerTitle}>Select Option</Text>
            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }
              const selected = value?.id === opt?.id;
              return (
                <Text
                  onPress={() => onselect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}>
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;
