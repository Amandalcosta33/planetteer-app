import { StyleSheet } from 'react-native';
import { CORES, normalizePixels, StylesUtil } from '../../util/style-util';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CORES.BACKGROUND
  },
  viewCard: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  viewNoticia: {
    padding: normalizePixels(10)
  },
  viewBotoes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: normalizePixels(170)
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    ...StylesUtil.fontSize.large
  },
  text: {
    color: 'white',
    marginTop: normalizePixels(5),
    ...StylesUtil.fontSize.medium
  },
  chartLabel: {
    color: CORES.CINZA_PRIMARIO,
    marginTop: normalizePixels(5),
    fontSize: normalizePixels(12),
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
