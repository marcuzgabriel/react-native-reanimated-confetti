import React, { useEffect, useState, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Particle from './components/Particle';
import { IParticle } from './types';
import { DEFAULT_CONFIG } from './contants';
import { useCreateParticle } from './hooks';
import type { ConfettiProps } from './types';

/* NOTE: Exporting props so it can be reused */
export { ConfettiProps };

/**
 * General confetti component
 * @svgs array of svg components
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
}) => {
  const [particles, setParticles] = useState<IParticle[]>([]);
  const createParticle = useCreateParticle();

  useEffect(() => {
    if (particles.length === 0) {
      setParticles(Array.from({ length: count }).map(createParticle));
    }
  }, [createParticle, count, particles]);

  return (
    <View style={styles.container}>
      {particles.map((data, index) => (
        <Particle
          key={index}
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
          delay={delay}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
});

export default memo(Confetti);
