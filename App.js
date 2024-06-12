import React from 'react';
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
import Home from './src/screens/app/Home';
import Favorires from './src/screens/app/Favorires';
import ProductDetails from './src/screens/app/ProductDetails';
import Profile from './src/screens/app/Profile';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          } else if (route.name == 'Profile') {
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
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  const isSignIn = true;
  const theme = {
    colors: {
      background: colors.white,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignIn ? (
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
    </SafeAreaProvider>
  );
};

export default App;
