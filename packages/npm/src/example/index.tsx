import React from 'react';
import { useWindowDimensions } from 'react-native';
import Confetti from '../Confetti';

/**
 * Confetti example that pops up from the bottom the left and right side of the screen.
 */
const ConfettiExample: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <>
      <Confetti />
      <Confetti delay={650} origin={{ x: windowWidth, y: 0 }} />
    </>
  );
};

export default ConfettiExample;
