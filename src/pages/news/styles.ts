import { StyleSheet } from 'react-native';
import { CORES, normalizePixels, StylesUtil } from '../../util/style-util';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CORES.BACKGROUND
   },
  textAlerta: {
    ...StylesUtil.fontSize.medium,
    color: CORES.CINZA_PRIMARIO,
    marginTop: normalizePixels(10)
  },
  viewAlerta: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default styles;
