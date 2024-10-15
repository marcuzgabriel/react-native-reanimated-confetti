import React from 'react';
import { Svg, Circle as SvgCircle } from 'react-native-svg';
import { IShape } from '../../types';

const Circle: React.FC<IShape> = props => (
  <Svg viewBox='0 0 17 17' {...props}>
    <SvgCircle
      transform='translate(8.500000, 8.500000) scale(-1, 1) rotate(180.000000) translate(-8.500000, -8.500000)'
      cx='8.5'
      cy='8.5'
      r='8.5'
    />
  </Svg>
);

export default Circle;
