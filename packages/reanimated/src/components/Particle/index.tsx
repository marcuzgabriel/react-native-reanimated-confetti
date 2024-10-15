import React, { memo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import * as Shapes from '../../components/Shapes';
import { randomElementOfArray, randomNumber } from '../../helpers';
import { useGetConfettiShape } from '../../hooks';
import { ConfettiProps, IParticle } from '../../types';

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
  | 'batchConfetti'
  | 'activateAnimation'
> & {
  data: IParticle;
  index: number;
  origin: { x: number; y: number };
};

const SHAPES_KEYS = Object.keys(Shapes) as (keyof typeof Shapes)[];

const Particle: React.FC<Props> = ({
  index,
  minSize,
  maxSize,
  activateAnimation,
  explosionSpeed,
  fallSpeed,
  batchConfetti,
  delay,
  onlyShowCustomSvgs,
  fadeOut,
  colors,
  origin,
  svgs,
  data,
}) => {
  const batchDelay = index * 50; // Batch confetti start by 50ms per particle
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const animationClock = useSharedValue(0);
  const isAnimationRunning = useSharedValue(false);
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

  useAnimatedReaction(
    () => activateAnimation,
    () => {
      if (
        (typeof activateAnimation === 'undefined' || activateAnimation?.value) &&
        !isAnimationRunning.value
      ) {
        isAnimationRunning.value = true;
        animationClock.value = withDelay(
          batchConfetti ? batchDelay : typeof delay === 'number' ? delay : 0,
          withSequence(
            withTiming(0, {
              duration: 0,
            }),
            withTiming(1, {
              duration: explosionSpeed,
              easing: Easing.out(Easing.quad),
            }),
            withTiming(
              2,
              {
                duration: fallSpeed,
                easing: Easing.quad,
              },
              isAnimationDone => {
                if (isAnimationDone) {
                  isAnimationRunning.value = false;
                }
              },
            ),
          ),
        );
      }
    },
    [activateAnimation],
  );

  const animatedParticleStyle = useAnimatedStyle(() => ({
    width: size,
    height: size,
    opacity: interpolate(animationClock.value, [0, 1, 1.8, 2], [1, 1, 1, fadeOut ? 0 : 1]),
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
          [origin.x, data.deltas.left * windowWidth, data.deltas.left * windowWidth],
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
      <Animated.View style={animatedParticleStyle}>{ConfettiShape}</Animated.View>
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
