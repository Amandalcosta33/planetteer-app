import { Dimensions, Platform, StyleSheet } from 'react-native';
import { CORES, normalizePixels, StylesUtil } from '../../util/style-util';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalizePixels(20),
    justifyContent: 'space-between',
    backgroundColor: CORES.BACKGROUND_SECUNDARIO,
    ...Platform.select({
      ios: {
        paddingTop: normalizePixels(50),
        height: normalizePixels(113),
      }
    }),
  },
  viewBemVindo: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textBemVindo: {
    color: 'white',
    ...StylesUtil.fontSize.medium
  },
  textNome: {
    color: 'white',
    fontWeight: 'bold',
    ...StylesUtil.fontSize.medium
  },
  textoItem: {
    color: CORES.CINZA_PRIMARIO
  },
  container: {
    backgroundColor: CORES.BACKGROUND
  },
  avatar: {
    resizeMode: 'cover',
    width: normalizePixels(110),
    height: normalizePixels(110),
    alignSelf: 'center',
    borderRadius: 80,
    borderWidth: 4,
    borderColor: CORES.PRIMARIO
  },
  viewAvatar: {
    alignItems: 'center',
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonAvatar: {
    width: normalizePixels(120),
    borderRadius: 80
  },
  textSessao: {
    margin: 10,
    ...StylesUtil.fontSize.medium,
    color: CORES.CINZA_SECUNDARIO
  },
  buttonLogout: {
    justifyContent: 'center',
    width: DEVICE_WIDTH - normalizePixels(120),
    flexDirection: 'row',
    height: 45,
  },
  textLogout: {
    fontWeight: 'bold'
  }
});

export default styles;
