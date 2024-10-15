import React from 'react';
import { Rect, Svg } from 'react-native-svg';
import { IShape } from '../../types';

const Square: React.FC<IShape> = props => (
  <Svg viewBox='0 0 16 16' {...props}>
    <Rect
      transform='translate(8.000000, 8.000000) scale(-1, 1) rotate(180.000000) translate(-8.000000, -8.000000)'
      x='0'
      y='0'
      width='16'
      height='16'
    />
  </Svg>
);

export default Square;
