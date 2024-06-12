import React from 'react';
import {styles} from './styles';
import {colors} from '../../../utils/colors';
import {Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(Profile);
