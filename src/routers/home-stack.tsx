import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import HomePage from '../pages/home/home-page';
import NoticiasPage from '../pages/news/noticias-page';
import { ProfilePage } from '../pages/profile/profile-page';
import ChatPage from '../pages/chat/chat-page';
import StatisticsPage from '../pages/statistics/statistics-page';

export enum HomePages {
  Home = 'Home',
  News = 'News',
  Chat = 'Chat',
  Profile = 'Profile',
  Statistics = 'Statistics'
}

export type HomeStackParamList = {
  [HomePages.Home]: undefined;
  [HomePages.News]: undefined;
  [HomePages.Chat]: undefined;
  [HomePages.Profile]: undefined;
  [HomePages.Statistics]: undefined;
};

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList, HomePages.Home>;

const Drawer = createDrawerNavigator();
export const HomeStack = createStackNavigator<HomeStackParamList>();

export default function DrawnerStackScreen() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ animationEnabled: false }}>
      <HomeStack.Screen
        name={HomePages.Home}
        key={HomePages.Home}
        component={HomePage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={HomePages.News}
        key={HomePages.News}
        component={NoticiasPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={HomePages.Chat}
        key={HomePages.Chat}
        component={ChatPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={HomePages.Profile}
        key={HomePages.Profile}
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={HomePages.Statistics}
        key={HomePages.Statistics}
        component={StatisticsPage}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
