import {
  ProgressChart,
} from 'react-native-chart-kit';
import React from 'react';
import { progressChartData } from '../../../mock/chart-mock';
import { normalizePixels } from '../../../util/style-util';

export class TipsComponent extends React.Component {


  render() {

    const width = normalizePixels(300);
    const height = normalizePixels(140);

    const graphStyle = {
      marginVertical: 8,
      ...chartConfigs.style
    };

    return (
      <ProgressChart
        data={progressChartData}
        width={width}
        height={height}
        chartConfig={chartConfigs}
        style={graphStyle}
      />
    );
  }

}

const chartConfigs = {
  backgroundColor: '#022173',
  backgroundGradientFrom: '#022173',
  backgroundGradientTo: '#1b3fa0',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
};
