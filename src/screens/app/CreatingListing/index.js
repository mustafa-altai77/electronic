import React, {useState, useContext} from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker';
import Input from '../../../components/input';
import {categories} from '../../../data/categories';
import Button from '../../../components/Button';
import {addService} from '../../../utils/backendCalls';
import {ServicesContext} from '../../../../App';

const CreatingListing = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [values, setValues] = useState({});
  const {setServices} = useContext(ServicesContext);

  const [loading, setLoading] = useState(false);
  const goBack = () => {
    navigation.goBack();
  };
  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();
    if (result?.assets?.length) {
      const assets = result?.assets || [];
      setImages(list => [...list, ...assets]);
      setLoading(false);
    }
  };
  const onDeleteImage = image => {
    setImages(list => {
      const filtredImage = list.filter(
        img => img?.fileName !== image?.fileName,
      );
      return filtredImage;
    });
  };
  const onChange = (value, key) => {
    setValues(val => ({...val, [key]: value}));
  };
  const onSubmit = async () => {
    const img = images?.length ? images[0] : null;
    const data = {...values, category: values.category?.id};

    if (img) {
      data['image'] = {
        uri: img?.uri,
        name: img?.fileName,
        type: img?.type,
      };
    }
    console.log('data :>> ', data);
    const updatedServices = await addService(data);
    setServices(updatedServices);
    setValues({});
    navigation.navigate('MyListings');
  };

  return (
    <SafeAreaView>
      <Header showBack onBackPress={goBack} title="Create a new Listing" />
      <KeyboardAvoidingView behavior="position">
        <ScrollView style={styles.container}>
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity
              disabled={loading}
              style={styles.uploadContainer}
              onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
            {images?.map(images => (
              <View>
                <Image
                  key={images?.fileName}
                  style={styles.image}
                  source={{uri: images?.uri}}
                />
                <Pressable
                  style={styles.deletelIcon}
                  hitSlop={20}
                  onPress={() => onDeleteImage(images)}>
                  <Image
                    style={styles.delete}
                    source={require('../../../assets/delete.png')}
                  />
                </Pressable>
              </View>
            ))}
            {loading ? <ActivityIndicator /> : null}
          </View>
          <Input
            placeholder="Listing Title"
            lable="Title"
            value={values.title}
            onChangeText={v => onChange(v, 'title')}
          />
          <Input
            placeholder="Select the category"
            lable="category"
            value={values.category}
            onChangeText={v => onChange(v, 'category')}
            type="picker"
            options={categories}
          />
          <Input
            placeholder="Enter price in USD"
            lable="Price"
            value={values.price}
            onChangeText={v => onChange(v, 'price')}
            keyboardType="numeric"
          />
          <Input
            style={styles.textArea}
            placeholder="Tell us more..."
            lable="Description"
            value={values.description}
            onChangeText={v => onChange(v, 'description')}
            multiline
          />
          <Button title="Submit" onPress={onSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default React.memo(CreatingListing);
