import { useCallback } from 'react';
import { randomNumber } from '../helpers';

export const useCreateParticle = () =>
  useCallback(
    () => ({
      deltas: {
        left: randomNumber(0, 1),
        bottom: randomNumber(0, 3),
        top: randomNumber(0.7, 1),
        swing: randomNumber(0.2, 1),
        rotateX: randomNumber(0.3, 1),
        rotateY: randomNumber(0.3, 1),
        rotateZ: randomNumber(0.3, 1),
      },
    }),
    [],
  );
