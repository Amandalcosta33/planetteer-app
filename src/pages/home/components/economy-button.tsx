import { Icon, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IconType } from '../../../util/types-util';
import { CORES, normalizePixels, StylesUtil } from '../../../util/style-util';

export interface EconomomyButtonProps {
  titulo: string,
  subtitulo: string,
  icon: {
    name: string,
    type: IconType
  },
  style?: any,
  onPress: () => void
}

export default class EconomyButton extends React.Component<EconomomyButtonProps> {

  render() {
    const { icon, titulo, subtitulo } = this.props;

    return (
      <TouchableOpacity style={[styles.button, this.props.style]}>
        <View style={styles.container}>
          {icon && <Icon type={icon.type} name={icon.name} style={styles.icon}/>}
          <View style={styles.viewText}>
            <Text style={styles.titulo}>{titulo}
              <Icon type='Feather' name='arrow-up' style={styles.innerIcon}/>
            </Text>
            <Text style={styles.subtitulo}>Unity: Cents US$/lb</Text>
            <Text style={styles.subtitulo}>DayPrice: 86.52</Text>
          </View>
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
    backgroundColor: '#0072c3',
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
    fontSize: normalizePixels(24),
    color: 'white',
    flex: 1
  },
  innerIcon: {
    fontSize: normalizePixels(12),
    color: 'white',
    flex: 1
  },
  titulo: {
    color: 'white',
    fontSize: normalizePixels(12)
  },
  subtitulo: {
    marginTop: 8,
    color: 'white',
    fontSize: normalizePixels(8)
  }
});
