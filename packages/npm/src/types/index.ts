import React from 'react';

export type IShape = {
  height: number;
  width: number;
  fill?: string;
  stroke?: string;
  scale: number;
};

export type ILayout = {
  width: number;
  height: number;
};

export type IParticle = {
  deltas: {
    left: number;
    bottom: number;
    swing: number;
    rotateX: number;
    rotateY: number;
    top: number;
    rotateZ: number;
  };
};

export type ConfettiProps = {
  count?: number;
  duration?: number;
  minSize?: number;
  maxSize?: number;
  colors?: string[];
  index?: number;
  delay?: number;
  svgs?: React.ReactNode[];
  origin?: { x: number; y: number };
  explosionSpeed?: number;
  fallSpeed?: number;
  fadeOut?: boolean;
  onlyShowCustomSvgs?: boolean;
};
