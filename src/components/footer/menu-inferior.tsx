import React, { Component } from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CORES, StylesUtil } from '../../util/style-util';
import { HomeNavigationProp, HomePages } from '../../routers/home-stack';

interface MenuProps {
  active?: HomePages,
  navigation: HomeNavigationProp
}

export default class MenuInferior extends Component<MenuProps, any> {

  constructor(props: Readonly<MenuProps>) {
    super(props);
  }

  private getStyle(page: HomePages, padrao: Object) {

    if (this.props.active === page) {
      return [padrao, styles.ativo];
    }

    return [padrao];
  }

  render() {
    return (
      <View>
        <Footer style={styles.footer}>
          <FooterTab style={styles.menu}>
            <Button vertical transparent onPress={() => this.props.navigation.navigate(HomePages.Home)}>
              <Icon name='home' type='Feather' style={this.getStyle(HomePages.Home, styles.icones)}/>
              <Text style={this.getStyle(HomePages.Home, styles.texto)}>{HomePages.Home}</Text>
            </Button>
            <Button vertical transparent onPress={() => this.props.navigation.navigate(HomePages.News)}>
              <Icon name='newspaper-variant-outline' type='MaterialCommunityIcons' style={this.getStyle(HomePages.News, styles.icones)}/>
              <Text style={this.getStyle(HomePages.News, styles.texto)}>{HomePages.News}</Text>
            </Button>
            <TouchableOpacity style={[styles.buttonContainer, styles.fabButton]} activeOpacity={1}
                              onPress={() => this.props.navigation.navigate(HomePages.Chat)}>
              <Icon name="wechat" type='FontAwesome' style={{ color: '#FFF', fontSize: 22 }}/>
            </TouchableOpacity>
            <Button vertical transparent onPress={() => this.props.navigation.navigate(HomePages.Statistics)}>
              <Icon name='pie-chart' type='Feather' style={this.getStyle(HomePages.Statistics, styles.icones)}/>
              <Text style={this.getStyle(HomePages.Chat, styles.texto)}>{HomePages.Statistics}</Text>
            </Button>
            <Button vertical transparent onPress={() => this.props.navigation.navigate(HomePages.Profile)}>
              <Icon name='user' type='Feather' style={this.getStyle(HomePages.Profile, styles.icones)}/>
              <Text style={this.getStyle(HomePages.Profile, styles.texto)}>{HomePages.Profile}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  menu: {
    elevation: 1,
    shadowRadius: 0.1,
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: CORES.BACKGROUND,
    borderTopColor: '#E3E3E3'
  },
  icones: {
    color: CORES.CINZA_PRIMARIO,
    ...StylesUtil.fontSize.large
  },
  texto: {
    color: CORES.CINZA_PRIMARIO,
    ...StylesUtil.fontSize.mini
  },
  ativo: {
    color: CORES.PRIMARIO
  },
  footer: {
    backgroundColor: 'white'
  },
  buttonContainer: {
    // position: "absolute",
    // top: -10,
    // width: 56,
    // height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    // left: (Dimensions.get('window').width / 2) - 21,
  },
  fabButton: {
    // zIndex: 1000,
    backgroundColor: CORES.PRIMARIO,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#000',
    shadowRadius: 3,
    elevation: 5,
    width: 56,
    height: 56,
    marginTop: -16,
  },

});
