import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles} from './styles';

const EditableBox = ({lable, value, onChangeText, editable, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.lable}>{lable}</Text>
      <TextInput
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};
export default React.memo(EditableBox);
