import { Dimensions, Platform, PixelRatio } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// based on iphone 5s's scale
const widthScale = SCREEN_WIDTH / 320;

export const CORES = {

    PRIMARIO: '#78a9ff',
    SECUNDARIO: "#002d9c",

    CINZA_PRIMARIO: '#edf5ff',
    CINZA_SECUNDARIO: '#d0e2ff',

    BACKGROUND: '#001d6c',
    BACKGROUND_SECUNDARIO: '#001141'
};

/**
 * Normaliza a quantidade de pixels para o aparelho que irá executar
 * @param size tamanho em pixels a ser convertido
 * @returns {number} retorna o tamanho do pixels normalizado
 */
export function normalizePixels(size: number): number {
    const newSize = size * widthScale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

/**
 * Obtém a quantidade de pixels em porcentagem da tela do aparelho
 * @param porcentagem porcentagem a ser convertida
 * @returns {number} quantidade de pixels correspondete
 */
export function widthPct(porcentagem: number): number {
    const value = (porcentagem * SCREEN_WIDTH) / 100;
    return Math.round(value);
}

export const StylesUtil = {
    fontSize: {
        mini: {
            fontSize: moderateScale(8) // 10px
        },
        small: {
            fontSize: moderateScale(12.8) //16px
        },
        medium: {
            fontSize: moderateScale(16), // 20px
        },
        large: {
            fontSize: moderateScale(19.2), //24px
        },
        xlarge: {
            fontSize: moderateScale(36),
        },
    }

};
