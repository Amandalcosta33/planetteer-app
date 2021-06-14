import React from 'react';
import { Body, Button, Container, Content, Icon, Left, ListItem, Right, Text, View } from 'native-base';
import Logo from '../../components/logo';
import styles from './styles';
import { CORES } from '../../util/style-util';
import { Image, TouchableOpacity } from 'react-native';
import { HomeNavigationProp, HomePages } from '../../routers/home-stack';
import FooterDefault from '../../components/footer/footer-default';
import MainHeader from '../../components/header/main-header';
import MenuInferior from '../../components/footer/menu-inferior';
import { StatusBar } from 'expo-status-bar';

const imgUser = '../../../assets/no-user.png';

const BUTTONS = [
  { text: 'Câmera', icon: 'camera', iconColor: CORES.CINZA_PRIMARIO },
  { text: 'Galeria', icon: 'image', iconColor: CORES.CINZA_PRIMARIO },
  { text: 'Cancel', icon: 'close', iconColor: CORES.SECUNDARIO }
];

interface ProfileProps {
  navigation: HomeNavigationProp
}

export class ProfilePage extends React.Component<ProfileProps> {

  constructor(props: Readonly<ProfileProps>) {
    super(props);

    this.state = {};
  }

  renderHeader() {

    const nome = 'Paul'

    return (
      <View>
        <View style={styles.viewHeader}>
          <View style={styles.viewBemVindo}>
            <Text style={styles.textBemVindo}>Hi,</Text>
            <Text style={styles.textNome}>{nome}</Text>
          </View>
          <Right>
            <Logo height={45} width={96} />
          </Right>
        </View>
      </View>
    );
  }

  renderFoto() {

    let profile = <Image source={require(imgUser)} style={styles.avatar} />;

    return (
      <View style={styles.viewAvatar}>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.buttonAvatar}>
          {profile}
        </TouchableOpacity>
      </View>
    );
  }


  renderFooter() {
    return (
      <FooterDefault>
        <Button transparent style={styles.buttonLogout}>
          <Icon active name='logout' type='MaterialCommunityIcons' />
          <Text style={styles.textLogout}>SAIR</Text>
        </Button>
      </FooterDefault>
    );
  }

  render() {
    return (
        <Container style={styles.container}>
          <MainHeader navigation={this.props.navigation}/>
          {this.renderFoto()}
          <Content>
            <Text style={styles.textSessao}>Profile</Text>
            <ListItem noBorder icon>
              <Left>
                <Button style={{ backgroundColor: CORES.PRIMARIO }}>
                  <Icon active name='profile' type='AntDesign' />
                </Button>
              </Left>
              <Body>
                <Text style={styles.textoItem}>User info (SOON)</Text>
              </Body>
            </ListItem>
            <Text style={styles.textSessao}>Tags</Text>
            <ListItem noBorder icon onPress={() => this.props.navigation.navigate(HomePages.Home)}>
              <Left>
                <Button style={{ backgroundColor: CORES.PRIMARIO }}>
                  <Icon active name='paw' type='FontAwesome' />
                </Button>
              </Left>
              <Body>
                <Text style={styles.textoItem}>Tags</Text>
              </Body>
            </ListItem>
          </Content>
          <MenuInferior active={HomePages.Profile} navigation={this.props.navigation}/>
          <StatusBar style='light'/>
        </Container>
    );
  }
}
