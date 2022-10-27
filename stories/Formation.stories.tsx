import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Formation, Props } from '../src/Formation';

const meta: Meta = {
  title: 'Formation',
  component: Formation,
  argTypes: {
    formation: {
      options: [
        '4-3-3',
        '4-5-1',
        '4-1-4-1',
        '4-4-2',
        '4-2-3-1',
        '4-4-1-1',
        '4-1-2-1-2',
        '4-2-2-2',
        '4-3-1-2',
        '4-3-3',
        '5-4-1',
        '4-2-4',
        '5-4-1',
        '3-1-4-2',
        '5-3-2',
        '5-2-1-2',
      ],
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Formation {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
