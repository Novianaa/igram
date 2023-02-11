import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home'
import ExplorerScreen from './src/screens/Explorer';
import ShopScreen from './src/screens/Shop';
import ProfileScreen from './src/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const Tab = createBottomTabNavigator()
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? size + 5 : size + 2;
          } else if (route.name === 'Explorer') {
            iconName = focused ? 'md-search' : 'ios-search-outline';
            size = focused ? size + 5 : size + 2;

          } else if (route.name === 'Shop') {
            iconName = focused ? 'basket' : 'basket-outline';
            size = focused ? size + 6 : size + 3;

          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            size = focused ? size + 5 : size + 2;

          }

          return <Ionic name={iconName} size={size} color={'#1e1e1e'} />;
        },
      })}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Explorer' component={ExplorerScreen} />
        <Tab.Screen name='Shop' component={ShopScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;