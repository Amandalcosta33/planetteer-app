import React from 'react';
import { StyleSheet } from 'react-native';
import { CORES, StylesUtil } from '../../util/style-util';
import { Body, Button, Header, Icon, Left, RnViewStyleProp, Title } from 'native-base';
import { HomeNavigationProp, HomePages } from '../../routers/home-stack';

interface HeaderBackState {
}

interface HeaderBackProps {
  titulo: string,
  backTo?: HomePages,
  styles?: RnViewStyleProp,
  navigation: HomeNavigationProp
}

export default class HeaderBack extends React.Component<HeaderBackProps, HeaderBackState> {

  constructor(props: Readonly<HeaderBackProps>) {
    super(props);
  }

  navigate() {

    if (this.props.navigation) {

      const { backTo } = this.props;

      if (backTo) {
        this.props.navigation.navigate(backTo);
      } else {
        this.props.navigation.goBack();
      }
    }
  }

  render() {
    return (
      <Header style={[this.props.styles, styles.header]} androidStatusBarColor={CORES.BACKGROUND_SECUNDARIO}>
        <Left>
          <Button transparent onPress={() => this.navigate()}>
            <Icon name="arrow-back"/>
          </Button>
        </Left>
        <Body style={{justifyContent: 'center'}}>
          <Title style={styles.texto}>{this.props.titulo}</Title>
        </Body>
      </Header>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: CORES.BACKGROUND_SECUNDARIO,
    shadowRadius: 0
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    ...StylesUtil.fontSize.large
  }
});
