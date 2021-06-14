import React from 'react';
import styles from './styles';
import { Col, Container, Content, Grid, Icon, Row, Text, View } from 'native-base';
import MainHeader from '../../components/header/main-header';
import MenuInferior from '../../components/footer/menu-inferior';
import { HomeNavigationProp, HomePages } from '../../routers/home-stack';
import { StatusBar } from 'expo-status-bar';
import EconomyButton from './components/economy-button';
import { CORES, normalizePixels } from '../../util/style-util';
import { TipsComponent } from './components/tips';
import { AdviceComponent } from './components/advice';

export interface HomeProps {
  navigation: HomeNavigationProp
}

export default class HomePage extends React.Component<HomeProps, any> {

  constructor(props: Readonly<HomeProps>) {
    super(props);
  }

  render() {
    return (
        <Container style={styles.container}>
          <MainHeader navigation={this.props.navigation} />
          <Content padder>
            <Grid>
              <Row>
                <Col style={{ marginRight: 4 }}>
                  <EconomyButton
                    onPress={() => this.props.navigation.navigate(HomePages.Home)}
                    icon={{ name: 'dollar', type: 'Foundation' }}
                    titulo="Cotton"
                    subtitulo="Confira rapidamente suas informações financeiras"
                  />
                </Col>
                <Col style={{ marginLeft: 4 }}>
                  <EconomyButton
                    onPress={() => this.props.navigation.navigate(HomePages.Home)}
                    icon={{ name: 'dollar', type: 'Foundation' }}
                    titulo="Coffe Bean"
                    subtitulo="Confira rapidamente suas informações financeiras"
                  />
                </Col>
              </Row>
            </Grid>
            <View style={{marginTop: normalizePixels(10), height: 530, backgroundColor: '#002d9c', borderRadius: 30}}>
              <View style={styles.viewNoticia}>
                <Text style={styles.label}>Good morning, Paul!</Text>
                <Text style={styles.text}>We have some data that can help you and the environment through a responsible production.</Text>
              </View>
              <Text style={styles.chartLabel}>Favorable conditions for planting</Text>
              <TipsComponent></TipsComponent>
                <AdviceComponent
                  titulo="Less need for irrigation"
                  labels={['August', 'September']}
                  style={{marginVertical: normalizePixels(5)}}
                  icon={{ name: 'cloud-rain', type: 'Feather' }}
                  subtitulo="The best period for planting cotton:"
                  right={{
                    text: '40%',
                    icon: { name: 'arrow-down', type: 'Feather' }
                  }}
                />
                <AdviceComponent
                  titulo="Lower carbon emission "
                  style={{marginVertical: normalizePixels(5)}}
                  labels={[]}
                  icon={{ name: 'emoji-transportation', type: 'MaterialIcons' }}
                  subtitulo="With routes planned between São Paulo and Taubate, it is possible to reduce carbon emissions by:"
                  right={{
                    text: '15%',
                    icon: { name: 'arrow-down', type: 'Feather' }
                  }}
                />
            </View>
          </Content>
          <MenuInferior active={HomePages.Home} navigation={this.props.navigation} />
          <StatusBar style='light'/>
        </Container>
    );
  }
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
