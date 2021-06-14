import { Badge, Icon, Right, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CORES, normalizePixels } from '../../../util/style-util';
import { IconType } from '../../../util/types-util';

export interface AdviceProps {
  titulo: string,
  subtitulo: string,
  icon: {
    name: string,
    type: IconType
  },
  labels: string[],
  style?: any,
  right: {
    icon: {
      name: string,
      type: IconType
    },
    text: string
  }
}

export class AdviceComponent extends React.Component<AdviceProps> {

  render() {

    const { icon, titulo, subtitulo } = this.props;

    let labels;

    if (this.props.labels && this.props.labels.length) {
      labels = this.props.labels.map(l => {
        return (
          <Badge primary>
            <Text>{l}</Text>
          </Badge>
        );
      });
    }

    return (
      <TouchableOpacity style={[styles.button, this.props.style]}>
        <View style={styles.container}>
          {icon && <Icon type={icon.type} name={icon.name} style={styles.icon} />}
          <View style={styles.viewText}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
            <View style={{flexDirection: 'row', paddingTop: normalizePixels(4)}}>
              {labels}
            </View>
          </View>
          <Right>
            <Text style={styles.titulo}>{this.props.right.text}
              {icon && <Icon type={this.props.right.icon.type} name={this.props.right.icon.name} style={styles.innerIcon} />}
            </Text>
          </Right>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CORES.PRIMARIO,
    padding: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  container: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: normalizePixels(60)
  },
  viewText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  icon: {
    fontSize: normalizePixels(30),
    color: 'white',
    flex: 1
  },
  innerIcon: {
    fontSize: normalizePixels(20),
    color: 'white',
    flex: 1
  },
  titulo: {
    color: 'white',
    fontSize: normalizePixels(14)
  },
  subtitulo: {
    marginTop: 8,
    color: 'white',
    fontSize: normalizePixels(8)
  }
});
