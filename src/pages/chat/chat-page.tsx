import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import styles from './styles';
import MenuInferior from '../../components/footer/menu-inferior';
import { HomeNavigationProp, HomePages } from '../../routers/home-stack';
import { CORES, normalizePixels } from '../../util/style-util';
import New from '../../model/news';
import MainHeader from '../../components/header/main-header';
import { MOCK_NEWS } from '../../mock/mock-news';
// @ts-ignore
import ChatBot from 'react-native-chatbot';
import { CHAT_STEPS } from '../../mock/chat';
import { StatusBar } from 'expo-status-bar';
const logoImg = '../../../assets/logo.png';

const logoImage = 'https://github.com/rivaldorodrigues/planeteer-app/blob/master/assets/logo.png?raw=true';
const userImage = 'https://github.com/rivaldorodrigues/planeteer-app/blob/master/assets/no-user.png?raw=true';

interface ChatProps {
  navigation: HomeNavigationProp
}

interface NoticiasState {
  carregando: boolean,
  noticias: New[]
}

export default class ChatPage extends React.Component<ChatProps> {

  constructor(props: Readonly<ChatProps>) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <MainHeader navigation={this.props.navigation} />
        <Content padder>
          <ChatBot
            steps={CHAT_STEPS}
            // Cores dos diálogos //
                   botAvatar={logoImage}
                   userAvatar={userImage}

                   botFontColor={ 'white' }
                   userFontColor={ '#FFFDF8' }
                   botBubbleColor={ CORES.PRIMARIO }
                   userBubbleColor={ '#FFC286' }

            // Cores do fundo do chat //
                   style={{ backgroundColor: CORES.BACKGROUND, height: normalizePixels(490)}}
                   contentStyle={{ backgroundColor: CORES.BACKGROUND }}

            // Estilo do Rodapé (Footer) //
                   footerStyle={{ backgroundColor: '#fff', borderRadius: 7, elevation: 2, }}
                   submitButtonStyle={{ backgroundColor: CORES.PRIMARIO, borderRadius: 7, width: 63}}
          />
        </Content>
        <MenuInferior active={HomePages.Chat} navigation={this.props.navigation} />
        <StatusBar style='light'/>
      </Container>
    );
  }
}
