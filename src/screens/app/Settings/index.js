import React, {useCallback, useContext, useState} from 'react';
import {Text, ScrollView, Linking, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';
import {ProfileContext} from '../../../../App';
import {updateProfile} from '../../../utils/backendCalls';

const Settings = ({navigation}) => {
  const [editing, setEditing] = useState(false);
  const {profile, setProfile} = useContext(ProfileContext);
  const [values, setValues] = useState({
    _id: profile?._id,
    fullName: profile?.fullName,
    email: profile?.email,
  });
  const onEditPress = () => {
    setEditing(true);
  };
  const onSave = async () => {
    const updatedProfile = await updateProfile(values);
    setProfile(updatedProfile);
    setEditing(false);
  };
  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };
  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Header showBack onBackPress={onBackPress} title="Settings" />
      <ScrollView style={styles.container}>
        <View style={styles.containerHeaderINfo}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.editIcon}
              source={require('../../../assets/edit.png')}
            />
          </Pressable>
        </View>
        <EditableBox
          lable="Name"
          onChangeText={v => onChange('fullName', v)}
          value={values.fullName}
          editable={editing}
        />
        <EditableBox
          lable="Email"
          onChangeText={v => onChange('email', v)}
          value={values.email}
          editable={editing}
        />
        {editing ? (
          <Button style={styles.Button} onPress={onSave} title="Save" />
        ) : null}
        <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Countact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terrms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(Settings);
