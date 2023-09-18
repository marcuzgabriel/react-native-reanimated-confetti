import React from 'react';
import { Svg, Polygon as SvgPolygon } from 'react-native-svg';
import { IShape } from '../../types';

const Polygon: React.FC<IShape> = (props) => (
  <Svg viewBox='0 0 16 16' {...props}>
    <SvgPolygon
      transform='translate(9.246648, 8.250998) scale(-1, 1) rotate(240.000000) translate(-9.246648, -8.250998)'
      points='9.24891848 1 16.4932963 6.53559622 13.7216495 15.4983229 4.7642998 15.5019964 2 6.54154005'
    />
  </Svg>
);

export default Polygon;
