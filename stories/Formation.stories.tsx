// @ts-ignore
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Formation, { Props } from '../src';

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
      defaultValue: '4-2-1-3',
      description: 'Formation string with hyphen separated',
    },
  },
  parameters: {
    controls: { expanded: true },
    info: {
      text: `
        install form NPM/Yarn 
        
        ~~~js
        yarn add react-soccer-formation
        npm i -S react-soccer-formation
        ~~~
        
        
        ~~~js
        import Formation from 'react-soccer-formation' 
        ~~~
      `,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Formation {...args} />;

export const Default = Template.bind({});

Default.args = {
  formation: '4-2-3-1',
};
