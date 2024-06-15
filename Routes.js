import React, {useContext, useEffect, useState} from 'react';
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
import Home from './src/screens/app/Home';
import Favorires from './src/screens/app/Favorires';
import ProductDetails from './src/screens/app/ProductDetails';
import Profile from './src/screens/app/Profile';
import Settings from './src/screens/app/Settings';
import CreatingListing from './src/screens/app/CreatingListing';
import MyListings from './src/screens/app/MyListings';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserContext} from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addTokenToAxios} from './src/utils/request';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatingListing"
        component={CreatingListing}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MyListings"
        component={MyListings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name == 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name == 'ProfileStack') {
            icon = focused
              ? require('./src/assets/tabs/user_active.png')
              : require('./src/assets/tabs/user.png');
          } else if (route.name == 'Favorires') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          }
          return <Image style={{width: size, height: size}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGrey},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorires" component={Favorires} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('auth_token');
      setUser({token});
    })();
  }, []);

  useEffect(() => {
    if (user?.token) {
      addTokenToAxios(user?.token);
    }
  }, [user]);

  const theme = {
    colors: {
      background: colors.white,
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {user?.token ? (
          <>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(Routes);
