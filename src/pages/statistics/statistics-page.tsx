import React from 'react';
import { Text, View } from 'react-native';
import { StatisticsNew } from './components/statistics-new';
import { Container, Content, Spinner } from 'native-base';
import styles from './styles';
import { showToast } from '../../util/toast-util';
import MenuInferior from '../../components/footer/menu-inferior';
import { HomeNavigationProp, HomePages } from '../../routers/home-stack';
import { CORES } from '../../util/style-util';
import New from '../../model/news';
import MainHeader from '../../components/header/main-header';
import { MOCK_NEWS } from '../../mock/mock-news';
import { StatusBar } from 'expo-status-bar';
import Stat from '../../model/stat';
import { STAT } from '../../mock/stat';

interface NoticiasProps {
  navigation: HomeNavigationProp
}

interface NoticiasState {
  carregando: boolean,
  noticias: Stat[]
}

export default class StatisticsPage extends React.Component<NoticiasProps, NoticiasState> {

  constructor(props: Readonly<NoticiasProps>) {
    super(props);

    this.state = {
      carregando: false,
      noticias: STAT
    };
  }

  render() {

    let conteudo;

    const { carregando, noticias } = this.state;
    const possuiDados = noticias && noticias.length;

    if (carregando) {
      conteudo = <Spinner color={CORES.PRIMARIO}/>
    } else if (possuiDados) {
      conteudo = this.renderNoticias();
    } else {
      conteudo = (
        <View style={styles.viewAlerta}>
          <Text style={styles.textAlerta}>Não há notícias no momento</Text>
        </View>
      );
    }

    return (
      <Container style={styles.container}>
        <MainHeader navigation={this.props.navigation} />
        <Content padder>
          {conteudo}
        </Content>
        <MenuInferior active={HomePages.Statistics} navigation={this.props.navigation} />
        <StatusBar style='light'/>
      </Container>
    );
  }

  private renderNoticias() {
    return this.state.noticias.map(n => {
      return <StatisticsNew key={n.id} noticia={n} />;
    });
  }
}
