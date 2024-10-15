import type { ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export interface IShape {
  height: number;
  width: number;
  fill?: string;
  stroke?: string;
  scale: number;
}

export interface ILayout {
  width: number;
  height: number;
}

export interface IParticle {
  deltas: {
    left: number;
    bottom: number;
    swing: number;
    rotateX: number;
    rotateY: number;
    top: number;
    rotateZ: number;
  };
}

export enum ShapeKeys {
  Circle = 'Circle',
  Polygon = 'Polygon',
  Polyline = 'Polyline',
  Square = 'Square',
  Star = 'Star',
  Triangle = 'Triangle',
  UserSvg = 'UserSvg',
}

export interface ConfettiProps {
  count?: number;
  activateAnimation?: SharedValue<boolean>;
  batchConfetti?: boolean;
  duration?: number;
  minSize?: number;
  maxSize?: number;
  colors?: string[];
  index?: number;
  delay?: number;
  svgs?: string[] | React.ReactNode[];
  origin?: { x: number; y: number };
  explosionSpeed?: number;
  fallSpeed?: number;
  fadeOut?: boolean;
  onlyShowCustomSvgs?: boolean;
  style?: ViewStyle | object;
}
