import React, {useContext} from 'react';
import {styles} from './styles';
import {Text, ScrollView, FlatList, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriresItem from '../../../components/FavoriresItem';
import Header from '../../../components/Header';
import {ServicesContext} from '../../../../App';
import {updatedService} from '../../../utils/backendCalls';

const Favorires = ({navigation}) => {
  const {services, setServices} = useContext(ServicesContext);

  const likedServices = Array.isArray(services)
    ? services?.filter(service => service?.liked)
    : [];
  const renderItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product: item});
    };
    const onRemove = async () => {
      const updatedServices = await updatedService(item?._id, {liked: false});
      if (Array.isArray(updatedServices)) {
        setServices(updatedServices);
      }
    };
    const onIconPress = () => {
      Alert.alert('Are you sure you want to remove from your favorites?', '', [
        {text: 'Yes', onPress: onRemove},
        {text: 'Cancel'},
      ]);
    };
    return (
      <FavoriresItem
        {...item}
        onIconPress={onIconPress}
        onPress={onProductPress}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorires" />
      <FlatList
        ListEmptyComponent={
          <Text style={styles.test}>You don't have any favorites yet</Text>
        }
        data={likedServices}
        renderItem={renderItem}
        keyExtractor={item => String(item?._id)}
      />
    </SafeAreaView>
  );
};
export default React.memo(Favorires);
