import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Base/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = ({
  duration,
  ...props
}) => {
  return <ProgressBar duration={5} {...props} />;
};

export const Primary = Template.bind({});

Primary.args = {
  duration: 5,
  color: 'red',
  height: 30,
};
