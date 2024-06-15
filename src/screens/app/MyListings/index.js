import React, {useContext} from 'react';
import {styles} from './styles';
import {Text, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriresItem from '../../../components/FavoriresItem';
import Header from '../../../components/Header';
import {ProfileContext, ServicesContext} from '../../../../App';
import {deleteService} from '../../../utils/backendCalls';

const MyListings = ({navigation}) => {
  const {services, setServices} = useContext(ServicesContext);
  const {profile} = useContext(ProfileContext);
  const myServices = Array.isArray(services)
    ? services.filter(service => service.owner === profile?._id)
    : [];

  const renderItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product: item});
    };
    const onRemove = async () => {
      const updatedService = await deleteService(item?._id);
      if (Array.isArray(services)) {
        setServices(updatedService);
      }
    };

    return (
      <FavoriresItem
        onIconPress={onRemove}
        {...item}
        onPress={onProductPress}
        icon={require('../../../assets/trash.png')}
      />
    );
  };

  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header showBack title="My Listing" onBackPress={onBackPress} />
      <FlatList
        data={myServices}
        renderItem={renderItem}
        keyExtractor={item => String(item?._id)}
      />
    </SafeAreaView>
  );
};
export default React.memo(MyListings);
