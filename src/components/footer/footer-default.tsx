import React from 'react';
import { StyleSheet } from 'react-native';
import { Footer, RnViewStyleProp } from 'native-base';
import { CORES } from '../../util/style-util';

interface FooterProps {
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
}

export default class FooterDefault extends React.Component<FooterProps> {

  constructor(props: FooterProps) {
    super(props);
  }

  render() {
    return (
      <Footer {...this.props} style={[styles.footer, this.props.style]}>
        {this.props.children}
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    elevation: 0,
    borderWidth: 0,
    backgroundColor: CORES.BACKGROUND,
    shadowColor: 'transparent'
  }
});
