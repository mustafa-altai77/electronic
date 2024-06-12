import React from 'react';
import {styles} from './styles';
import {Text, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriresItem from '../../../components/FavoriresItem';
import Header from '../../../components/Header';

const Favorires = ({navigation}) => {
  const renderItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return <FavoriresItem {...item} onPress={onProductPress} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorires" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};
export default React.memo(Favorires);
