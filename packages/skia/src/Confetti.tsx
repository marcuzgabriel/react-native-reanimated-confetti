import { Canvas } from '@shopify/react-native-skia';
import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Particle from './components/Particle';
import { DEFAULT_CONFIG } from './contants';
import { useCreateParticle } from './hooks/useCreateParticle';
import type { ConfettiProps, IParticle } from './types';

/* NOTE: Exporting props so it can be reused */
export { ConfettiProps };

/**
 * General confetti component
 * @svgs array of svg strings
 * @onlyShowCustomSvgs only show custom svgs
 * @origin origin of the confetti explosion
 * @explosionSpeed speed of the explosion
 * @fallSpeed speed of the fall
 * @fadeOut fade out speed
 * @count number of confetti
 * @minSize minimum size of the confetti
 * @maxSize maximum size of the confetti
 * @colors array of colors
 * @delay delay of the animation
 * @batchConfetti batch confetti for performance reasons
 * @activateAnimation possibility to prerender items prior to user interaction
 * @style container styles
 */
const Confetti: React.FC<ConfettiProps> = ({
  svgs = DEFAULT_CONFIG.SVGS,
  origin = DEFAULT_CONFIG.ORIGIN,
  explosionSpeed = DEFAULT_CONFIG.EXPLOSION_SPEED,
  onlyShowCustomSvgs = DEFAULT_CONFIG.ONLY_SHOW_CUSTOM_SVGS,
  fallSpeed = DEFAULT_CONFIG.FALL_SPEED,
  fadeOut = DEFAULT_CONFIG.FADE_OUT,
  count = DEFAULT_CONFIG.COUNT,
  minSize = DEFAULT_CONFIG.MIN_SIZE,
  maxSize = DEFAULT_CONFIG.MAX_SIZE,
  colors = DEFAULT_CONFIG.COLORS,
  delay = DEFAULT_CONFIG.DELAY,
  style = DEFAULT_CONFIG.CONTAINER_STYLE,
  batchConfetti = DEFAULT_CONFIG.BATCH_CONFETTI,
  activateAnimation = DEFAULT_CONFIG.ACTIVATE_ANIMATION,
}) => {
  const { height, width } = useWindowDimensions();
  const [particles, setParticles] = useState<IParticle[]>([]);
  const createParticle = useCreateParticle();
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: activateAnimation?.value ? 1 : 0,
  }));

  useEffect(() => {
    if (particles.length === 0) {
      setParticles(Array.from({ length: count }).map(createParticle));
    }
  }, [createParticle, count, particles]);

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        typeof activateAnimation === 'undefined' ? undefined : animatedStyle,
      ]}
    >
      <Canvas style={{ flex: 1, height, width }}>
        {particles.map((data, index) => (
          <Particle
            key={index}
            index={index}
            data={data}
            svgs={svgs}
            minSize={minSize}
            maxSize={maxSize}
            colors={colors}
            origin={origin}
            fadeOut={fadeOut}
            explosionSpeed={explosionSpeed}
            onlyShowCustomSvgs={onlyShowCustomSvgs}
            fallSpeed={fallSpeed}
            batchConfetti={batchConfetti}
            activateAnimation={activateAnimation}
            delay={delay}
          />
        ))}
      </Canvas>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    transform: [
      {
        rotate: '180deg',
      },
      {
        scaleX: -1,
      },
    ],
    width: '100%',
  },
});

export default memo(Confetti);
