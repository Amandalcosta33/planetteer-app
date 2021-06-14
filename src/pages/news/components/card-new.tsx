import React from 'react';
import HTMLView from 'react-native-htmlview';
import { Body, Card, CardItem, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { CORES, normalizePixels, widthPct } from '../../../util/style-util';
import { Image } from 'react-native-expo-image-cache';
import { isEmptyString, trimEllip } from '../../../util/string-util';
import New from '../../../model/news';

interface CardNewProps {
  noticia: New
}

interface CardNewState {
  mostrarModal: boolean
}

const TRIM_HEADER = 65;

export class CardNew extends React.Component<CardNewProps, CardNewState> {

  constructor(props: Readonly<CardNewProps>) {
    super(props);

    this.state = {
      mostrarModal: false
    };
  }

  render() {

    const { noticia } = this.props;

    return (
        <Card style={{ borderRadius: 10, width: '99%' }}>
          <CardItem header style={styles.cardHeader}>
            <Icon name='newspaper-variant-outline' type='MaterialCommunityIcons' style={styles.headerIcon} />
            <Text style={styles.headerText}>{trimEllip(noticia.title, TRIM_HEADER)}</Text>
          </CardItem>
          <CardItem style={styles.cardItemContainer}>
            <Body style={{ alignItems: 'center' }}>
              {this.renderImage()}
              {this.renderHTML()}
            </Body>
          </CardItem>
        </Card>
    );
  }

  private renderHTML() {

    const { noticia } = this.props;

    if (noticia && !isEmptyString(noticia.title)) {
      return (
        <HTMLView
          value={noticia.text}
          stylesheet={htmlStyles} />
      );
    }
  }

  private renderImage() {

    const { noticia } = this.props;

    if (noticia && !isEmptyString(noticia.image)) {
      return (
        <Image style={styles.bodyImage} uri={noticia.image} />
      );
    }
  }
}

export const HEIGHT = Math.ceil(widthPct(90));
export const WIDTH = Math.ceil(HEIGHT * 0.75);

const styles = StyleSheet.create({
  cardHeader: {
    width: '92%',
    borderRadius: 10,
    marginTop: normalizePixels(8),
    height: normalizePixels(42)
  },
  cardItemContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  youtubeContainer: {
    borderRadius: 10,
    width: '85%'
  },
  headerIcon: {
    color: CORES.SECUNDARIO
  },
  headerText: {
    color: CORES.SECUNDARIO,
    fontWeight: 'bold',
  },
  bodyImage: {
    width: WIDTH,
    height: HEIGHT,
    resizeMode: 'stretch'
  }
});

const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '700',
    color: CORES.SECUNDARIO
  },
  p: {
    fontWeight: '600',
    color: 'black'
  }
});
