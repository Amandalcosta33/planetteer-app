import React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Container, Root, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import DrawnerStackScreen from './src/routers/home-stack';
import { StatusBar } from 'expo-status-bar';

interface AppProps {
  isReady: boolean
}

export default class App extends React.Component<AppProps> {

  constructor(props: Readonly<AppProps>) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  async initFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
  }

  render() {

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.initFonts}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Root>
        <NavigationContainer>
          <DrawnerStackScreen />
        </NavigationContainer>
        <StatusBar style='light'/>
      </Root>
    );
  }
}
