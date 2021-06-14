import * as React from 'react';
import { Header, Left, Right, Text, Thumbnail, View } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CORES, normalizePixels, StylesUtil, widthPct } from '../../util/style-util';
import { HomePages } from '../../routers/home-stack';

const logoImg = '../../../assets/logo.png';
const userImg = '../../../assets/no-user.png';

interface MainHeaderProps {
  navigation: any;
}

export default class MainHeader extends React.Component<MainHeaderProps> {

  renderProfile() {
      return <Thumbnail style={styles.profile} source={require(userImg)}/>;
  }

  render() {

    let left: any;

    if (true) {
      left = <Left>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.props.navigation.openDrawer()}>
          {this.renderProfile()}
          <View style={styles.viewBemVindo}>
            <Text style={styles.textBemVindo}>Hi,</Text>
            <Text style={styles.textNome}>Paul</Text>
          </View>
        </TouchableOpacity>
      </Left>
    }

    return (
        <Header style={styles.header} androidStatusBarColor={CORES.BACKGROUND_SECUNDARIO}>
          {left}
          <Right>
            <TouchableOpacity style={styles.botaoLogo} onPress={() => this.props.navigation.navigate(HomePages.Home)}>
              <Image source={require(logoImg)} style={styles.iconLogo}/>
            </TouchableOpacity>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: CORES.BACKGROUND_SECUNDARIO,
    height: normalizePixels(78)
  },
  botaoLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  iconLogo: {
    width: widthPct(12),
    height: widthPct(12)
  },
  profile: {
    borderColor: CORES.PRIMARIO,
    borderWidth: 2
  },
  viewBemVindo: {
    marginLeft: normalizePixels(10),
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textBemVindo: {
    color: 'white',
    ...StylesUtil.fontSize.medium
  },
  textNome: {
    color: 'white',
    fontWeight: 'bold',
    ...StylesUtil.fontSize.medium
  }
});
