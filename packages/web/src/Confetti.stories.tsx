import React from 'react';
import { StoryObj } from '@storybook/react';
import ConfettiComponent, {
  ConfettiProps,
} from 'react-native-reanimated-confetti';
import ConfettiExample from '../../npm/src/example';

interface StorybookConfettiProps extends ConfettiProps {
  isExample?: boolean;
}

export default {
  title: 'stories/Confetti',
  component: (args: StorybookConfettiProps) =>
    args?.isExample ? <ConfettiExample /> : <ConfettiComponent />,
};

export const ConfettiWithDoubleCannon: StoryObj<StorybookConfettiProps> = {
  args: {
    isExample: true,
  },
};
