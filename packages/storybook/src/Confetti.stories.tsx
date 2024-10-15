import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import { StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from 'react-native';
import Confetti from 'react-native-reanimated-confetti/src';
import { ConfettiProps } from 'react-native-skia-confetti/src';

interface StorybookConfettiProps extends ConfettiProps {
  activateExample?: boolean;
}

export default {
  title: 'stories/Confetti',
  component: (args: StorybookConfettiProps) => {
    return args ? (
      <Confetti {...args} />
    ) : (
      <WithSkiaWeb
        // @ts-expect-error dynamic import is not supported by typescript
        getComponent={() => import('react-native-skia-confetti/src')}
        fallback={<Text>Loading Skia...</Text>}
      />
    );
  },
};

export const ConfettiWithSkia: StoryObj<StorybookConfettiProps> = {};

export const ConfettiWithBatching: StoryObj<StorybookConfettiProps> = {
  args: {
    batchConfetti: true,
  },
};
