import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import styles from './styles';

const ProductHomeItem = ({title, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `https://listicle.deegeehub.com/api/${image?.path}`}}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};
export default React.memo(ProductHomeItem);
