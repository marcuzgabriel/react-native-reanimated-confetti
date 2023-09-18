import React from 'react';
import { Svg, Polyline as SvgPolyline } from 'react-native-svg';
import { IShape } from '../../types';

const Polyline: React.FC<IShape> = (props) => (
  <Svg viewBox='0 0 33 28' {...props}>
    <SvgPolyline
      strokeWidth='10'
      transform='translate(16.500000, 14.316976) scale(-1, 1) translate(-16.500000, -14.316976)'
      points='29 20.8169761 18.3944594 9.36299232 14.0516206 18.6727264 4 7.81697613'
    />
  </Svg>
);

export default Polyline;
