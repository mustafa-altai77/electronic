import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import styles from './styles';

const FavoriresItem = ({title, price, image, onPress, icon, onIconPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `https://listicle.deegeehub.com/api/${image?.path}`}}
      />
      <View style={styles.contint}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Pressable onPress={onIconPress}>
        <Image
          style={styles.icon}
          source={icon || require('../../assets/cancel.png')}
        />
      </Pressable>
    </Pressable>
  );
};
export default React.memo(FavoriresItem);
