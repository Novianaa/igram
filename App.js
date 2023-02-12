import React, { useEffect } from 'react';
import { Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home'
import ExplorerScreen from './src/screens/Explorer';
import ShopScreen from './src/screens/Shop';
import ProfileScreen from './src/screens/Profile';
import SplashScreen from 'react-native-splash-screen';
import Story from './src/components/Story';
import Ionic from 'react-native-vector-icons/Ionicons';
import { ListsUser } from './src/assets/databases';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function ButtomTab() {
  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        padding: '2%'
      },

      tabBarIcon: ({ focused, size, colour }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
          size = focused ? size + 5 : size + 2;
          return <Ionic name={iconName} size={size} color={'#1e1e1e'} />;
        } else if (route.name === 'Explorer') {
          iconName = focused ? 'md-search' : 'ios-search-outline';
          size = focused ? size + 5 : size + 2;
          return <Ionic name={iconName} size={size} color={'#1e1e1e'} />;
        } else if (route.name === 'Shop') {
          iconName = focused ? 'basket' : 'basket-outline';
          size = focused ? size + 6 : size + 3;
          return <Ionic name={iconName} size={size} color={'#1e1e1e'} />;
        }
        return <Image source={require('./src/assets/images/eskrim.jpg')} style={{ width: 30, height: 30, borderRadius: 50 }} />
      },
    })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Explorer' component={ExplorerScreen} />
      <Tab.Screen name='Shop' component={ShopScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>

  );
}
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="BottomTab" component={ButtomTab} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;