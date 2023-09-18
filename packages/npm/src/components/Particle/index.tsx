import React, { memo, useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import * as Shapes from '../../components/Shapes';
import { ConfettiProps, IParticle } from '../../types';
import { useGetConfettiShape } from '../../hooks';
import { randomElementOfArray, randomNumber } from '../../helpers';

const ROTATE_X_OUTPUT = 360 * 10;
const ROTATE_Y_OUTPUT = 360 * 5;
const ROTATE_Z_OUTPUT = 360 * 2;

type Props = Pick<
  ConfettiProps,
  | 'fallSpeed'
  | 'svgs'
  | 'fadeOut'
  | 'explosionSpeed'
  | 'onlyShowCustomSvgs'
  | 'minSize'
  | 'maxSize'
  | 'colors'
  | 'delay'
> & {
  data: IParticle;
  origin: { x: number; y: number };
};

const SHAPES_KEYS = Object.keys(Shapes) as Array<keyof typeof Shapes>;

const Particle: React.FC<Props> = ({
  minSize,
  maxSize,
  explosionSpeed,
  fallSpeed,
  delay,
  onlyShowCustomSvgs,
  fadeOut,
  colors,
  origin,
  svgs,
  data,
}) => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const animationClock = useSharedValue(0);
  const shapeKey = randomElementOfArray(SHAPES_KEYS);
  const scale = randomNumber(0.7, 0.8);
  const size = randomNumber(minSize as number, maxSize as number) * scale;
  const ConfettiShape = useGetConfettiShape({
    scale,
    size,
    shapeKey,
    svgs,
    colors,
    onlyShowCustomSvgs,
  });

  useEffect(() => {
    animationClock.value = withDelay(
      delay ?? 0,
      withSequence(
        withTiming(0, {
          duration: 0,
        }),
        withTiming(1, {
          duration: explosionSpeed,
          easing: Easing.out(Easing.quad),
        }),
        withTiming(2, {
          duration: fallSpeed,
          easing: Easing.quad,
        }),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedParticleStyle = useAnimatedStyle(() => ({
    width: size,
    height: size,
    opacity: interpolate(
      animationClock.value,
      [0, 1, 1.8, 2],
      [1, 1, 1, fadeOut ? 0 : 1],
    ),
    transform: [
      {
        rotateX: `${interpolate(
          animationClock.value,
          [0, 2],
          [0, data.deltas.rotateX * ROTATE_X_OUTPUT],
        )}deg`,
      },
      {
        rotateY: `${interpolate(
          animationClock.value,
          [0, 2],
          [0, data.deltas.rotateY * ROTATE_Y_OUTPUT],
        )}deg`,
      },
      {
        rotateZ: `${interpolate(
          animationClock.value,
          [0, 2],
          [0, data.deltas.rotateZ * ROTATE_Z_OUTPUT],
        )}deg`,
      },
      {
        translateX: interpolate(
          animationClock.value,
          [0, 0.4, 1.2, 2],
          [0, -(data.deltas.swing * 30), data.deltas.swing * 30, 0],
        ),
      },
    ],
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          animationClock.value,
          [0, 1, 2],
          [
            origin.x,
            data.deltas.left * windowWidth,
            data.deltas.left * windowWidth,
          ],
        ),
      },
      {
        translateY: interpolate(
          animationClock.value,
          [0, 1, 1 + data.deltas.top, 2],
          [-origin.y, -data.deltas.top * windowHeight, 0, 0],
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Animated.View style={animatedParticleStyle}>
        {ConfettiShape}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default memo(Particle);
