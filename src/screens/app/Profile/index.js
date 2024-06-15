import React, {useContext, useEffect} from 'react';
import {styles} from './styles';
import {colors} from '../../../utils/colors';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import {getProfile} from '../../../utils/backendCalls';
import {ProfileContext, ServicesContext} from '../../../../App';

const Profile = ({navigation}) => {
  const {profile, setProfile} = useContext(ProfileContext);
  const {services} = useContext(ServicesContext);
  const myServices = Array.isArray(services)
    ? services.filter(service => service.owner === profile?._id)
    : [];
  const num = myServices.length;
  useEffect(() => {
    (async () => {
      const data = await getProfile();
      setProfile(data);
    })();
  }, []);
  const onLogout = () => {};
  const onPressSetting = () => {
    navigation.navigate('Settings');
  };
  const onNewListigAdd = () => {
    navigation.navigate('CreatingListing');
  };
  const onPressMyList = () => {
    navigation.navigate('MyListings');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>{profile?.fullName}</Text>
          <Text style={styles.email}>{profile?.email}</Text>
          <ListItem
            title="My Listing"
            subtitle={`You have ${num} listing`}
            onPress={onPressMyList}
          />
          <ListItem
            title="Settings"
            subtitle="Account, FAQ, Contact"
            onPress={onPressSetting}
          />
        </View>

        <Button
          style={{flex: 0}}
          title="Add a New Listing"
          onPress={onNewListigAdd}
        />
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Profile);
