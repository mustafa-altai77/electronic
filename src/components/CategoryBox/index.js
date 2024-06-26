import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import styles from './styles';
import {colors} from '../../utils/colors';

const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? {marginLeft: 8} : {}]}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: colors.black} : {},
        ]}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};
export default React.memo(CategoryBox);
