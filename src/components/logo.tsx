import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { normalizePixels } from '../util/style-util';

interface LogoProps {
    width?: number
    height?: number
}

export default class Logo extends PureComponent<LogoProps> {

    constructor(props: Readonly<LogoProps>) {
        super(props)
    }

    render() {

        const {width, height} = this.props;

        return (
            <View style={styles.container}>
                <Image style={{width: normalizePixels(width || 252), height: normalizePixels(height || 118)}} source={require('../../assets/logo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
