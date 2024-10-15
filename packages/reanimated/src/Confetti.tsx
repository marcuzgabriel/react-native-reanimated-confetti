import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Particle from './components/Particle';
import { DEFAULT_CONFIG } from './contants';
import { useCreateParticle } from './hooks';
import type { ConfettiProps, IParticle } from './types';

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
  const [particles, setParticles] = useState<IParticle[]>([]);
  const createParticle = useCreateParticle();

  useEffect(() => {
    if (particles.length === 0) {
      setParticles(Array.from({ length: count }).map(createParticle));
    }
  }, [createParticle, count, particles]);

  return (
    <View style={[styles.container, style]}>
      {particles.map((data, index) => (
        <Particle
          index={index}
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
          batchConfetti={batchConfetti}
          activateAnimation={activateAnimation}
          delay={delay}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});

export default memo(Confetti);
