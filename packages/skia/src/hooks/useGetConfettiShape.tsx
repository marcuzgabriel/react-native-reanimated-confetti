import { ImageSVG, Path, Skia } from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import { randomElementOfArray } from '../helpers';
import { ConfettiProps, ShapeKeys } from '../types';

interface UseGetShapeParams extends Pick<ConfettiProps, 'colors' | 'svgs' | 'onlyShowCustomSvgs'> {
  shapeKey: ShapeKeys;
  size: number;
}

export const useGetConfettiShape = ({
  size,
  shapeKey,
  colors,
  svgs,
  onlyShowCustomSvgs,
}: UseGetShapeParams) =>
  useMemo(() => {
    const randomColor: string = randomElementOfArray(colors as string[]);
    const paint = Skia.Paint();
    paint.setColor(Skia.Color(randomColor));

    if (onlyShowCustomSvgs) {
      if (svgs?.length) {
        const svg = randomElementOfArray(svgs);

        if (typeof svg === 'string') {
          const derivedSvg = Skia.SVG.MakeFromString(svg);
          return <ImageSVG svg={derivedSvg} width={size} height={size} />;
        }

        return null;
      }

      return null;
    }

    switch (shapeKey) {
      case ShapeKeys.Circle: {
        const path = Skia.Path.Make();
        path.addCircle(size / 2, size / 2, size / 2);
        return <Path path={path} paint={paint} />;
      }

      case ShapeKeys.Polygon: {
        const path = Skia.Path.Make();
        path.moveTo(size / 2, 0);
        path.lineTo(size, size / 4);
        path.lineTo(size, (3 * size) / 4);
        path.lineTo(size / 2, size);
        path.lineTo(0, (3 * size) / 4);
        path.lineTo(0, size / 4);
        path.close();

        return <Path path={path} paint={paint} />;
      }

      case ShapeKeys.Polyline: {
        const path = Skia.Path.Make();
        path.moveTo(0, 0);
        path.lineTo(size, size / 2);
        path.lineTo(0, size);

        return <Path path={path} paint={paint} />;
      }
      case ShapeKeys.Square: {
        const path = Skia.Path.Make();
        path.addRect({ x: 0, y: 0, width: size, height: size });

        return <Path path={path} paint={paint} />;
      }

      case ShapeKeys.Star: {
        const path = Skia.Path.Make();
        const outerRadius = size / 2;
        const innerRadius = outerRadius / 2.5;
        const centerX = size / 2;
        const centerY = size / 2;
        const numPoints = 5;

        path.moveTo(
          centerX + outerRadius * Math.cos(-Math.PI / 2),
          centerY + outerRadius * Math.sin(-Math.PI / 2),
        );

        for (let i = 0; i < numPoints; i++) {
          const outerAngle = (i * 2 * Math.PI) / numPoints - Math.PI / 2;
          const innerAngle = ((i + 0.5) * 2 * Math.PI) / numPoints - Math.PI / 2;
          path.lineTo(
            centerX + outerRadius * Math.cos(outerAngle),
            centerY + outerRadius * Math.sin(outerAngle),
          );
          path.lineTo(
            centerX + innerRadius * Math.cos(innerAngle),
            centerY + innerRadius * Math.sin(innerAngle),
          );
        }
        path.close();

        return <Path path={path} paint={paint} />;
      }

      case ShapeKeys.Triangle: {
        const path = Skia.Path.Make();
        path.moveTo(size / 2, 0);
        path.lineTo(size, size);
        path.lineTo(0, size);
        path.close();

        return <Path path={path} paint={paint} />;
      }

      case ShapeKeys.UserSvg: {
        if (svgs?.length) {
          const svg = randomElementOfArray(svgs);

          if (typeof svg === 'string') {
            const derivedSvg = Skia.SVG.MakeFromString(svg);
            return <ImageSVG svg={derivedSvg} width={size} height={size} />;
          }

          return null;
        }

        return null;
      }

      default: {
        return null;
      }
    }
  }, [colors, onlyShowCustomSvgs, shapeKey, size, svgs]);
