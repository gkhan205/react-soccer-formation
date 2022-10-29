// @ts-ignore
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Formation, { allFormations } from '../src';
import { FormationProps as Props } from '../src/types';

const meta: Meta = {
  title: 'Formation',
  component: Formation,
  argTypes: {
    formation: {
      options: allFormations,
      control: { type: 'select' },
      defaultValue: allFormations[0],
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
        import Formation, { allFormations } from 'react-soccer-formation';
        ~~~
        
        Please use this allFormations array for dropdown as this is tightly coupled with the library
      `,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Formation {...args} />;

export const Default = Template.bind({});

Default.args = {
  formation: allFormations[0],
  onPositionSelection(position: string): any {},
};
