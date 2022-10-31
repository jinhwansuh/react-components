import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Base/Text',
  component: Text,
  argTypes: {
    size: { control: 'number' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
  size: 12,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginAll: 0,
  color: 'black',
  bold: false,
};
