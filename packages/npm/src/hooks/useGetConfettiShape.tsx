import React, { Fragment, useMemo } from 'react';
import * as Shapes from '../components/Shapes';
import { randomElementOfArray } from '../helpers';
import type { ConfettiProps } from '../types';

interface UseGetShapeParams
  extends Pick<ConfettiProps, 'colors' | 'svgs' | 'onlyShowCustomSvgs'> {
  shapeKey:
    | 'Circle'
    | 'Polygon'
    | 'Polyline'
    | 'Square'
    | 'Star'
    | 'Triangle'
    | 'UserSvgs';
  scale: number;
  size: number;
}

export const useGetConfettiShape = ({
  scale,
  size,
  shapeKey,
  colors,
  svgs,
  onlyShowCustomSvgs,
}: UseGetShapeParams) =>
  useMemo(() => {
    const dimensions = { height: size, width: size };
    const randomColor: string = randomElementOfArray(colors as string[]);

    if (onlyShowCustomSvgs) {
      if (svgs?.length) {
        return svgs.map((svg, i) => (
          <Fragment key={`${svg}_${i}`}>{svg}</Fragment>
        ));
      }

      return null;
    }

    switch (shapeKey) {
      case 'Circle': {
        return (
          <Shapes.Circle {...dimensions} fill={randomColor} scale={scale} />
        );
      }
      case 'Polygon': {
        return (
          <Shapes.Polygon fill={randomColor} {...dimensions} scale={scale} />
        );
      }
      case 'Polyline': {
        return (
          <Shapes.Polyline stroke={randomColor} {...dimensions} scale={scale} />
        );
      }
      case 'Square': {
        return (
          <Shapes.Square fill={randomColor} {...dimensions} scale={scale} />
        );
      }
      case 'Star': {
        return <Shapes.Star fill={randomColor} {...dimensions} scale={scale} />;
      }
      case 'Triangle': {
        return (
          <Shapes.Triangle fill={randomColor} {...dimensions} scale={scale} />
        );
      }
      case 'UserSvgs': {
        if (svgs?.length) {
          return svgs.map((svg, i) => (
            <Fragment key={`${svg}_${i}`}>{svg}</Fragment>
          ));
        }

        return null;
      }
      default: {
        return null;
      }
    }
  }, [colors, onlyShowCustomSvgs, scale, shapeKey, size, svgs]);
