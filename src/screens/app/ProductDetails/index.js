import React, {useContext, useState} from 'react';
import {styles} from './styles';
import {Text, ScrollView, Image, View, Pressable, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import {updatedService} from '../../../utils/backendCalls';
import {ServicesContext} from '../../../../App';

const ProductDetails = ({route, navigation}) => {
  const params = route?.params || {};
  const {services, setServices} = useContext(ServicesContext);
  const product = services?.find(
    service => service?._id === params?.product?._id,
  );
  const [isLiked, setLiked] = useState(services?.liked);
  const onContact = () => {
    Linking.openURL('tel:12322337');
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  const onBookmark = async () => {
    setLiked(!isLiked);
    const data = await updatedService(product?._id, {liked: isLiked});
    setServices(data);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: `https://listicle.deegeehub.com/api/${product?.image?.path}`,
            }}
          />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>${product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require('../../../assets/back.png')}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable onPress={onBookmark} style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={
              product?.liked
                ? require('../../../assets/tabs/bookmark_active.png')
                : require('../../../assets/tabs/bookmark.png')
            }
          />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(ProductDetails);
