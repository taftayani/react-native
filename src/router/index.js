import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from '../pages/Home';
import WishList from '../pages/List';
import Splash from '../pages/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../pages/News';
import Profile from '../pages/Profile';
import Stories from '../pages/Stories';
import ButtomNav from '../components/Elements/Navigation/ButtomNav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <ButtomNav {...props} />}>
      <Tab.Screen name="Stories" component={Stories} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{headerShown: false}}
      />

      <Tab.Screen name="List" component={WishList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Stories"
        component={Stories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
