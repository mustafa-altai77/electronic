import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import styles from './styles';

const FavoriresItem = ({title, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.contint}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image style={styles.icon} source={require('../../assets/cancel.png')} />
    </Pressable>
  );
};
export default React.memo(FavoriresItem);
