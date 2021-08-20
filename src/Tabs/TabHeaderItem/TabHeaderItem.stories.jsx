import { TabHeaderItem } from "./TabHeaderItem";

export default {
  title: 'TabHeaderItem',
  component: TabHeaderItem,
  argTypes: {
    text: { control: 'text' },
    active: { control: 'boolean' }
  }
}

const Template = (args) => <TabHeaderItem {...args} />

export const Base = Template.bind({});
Base.args = {
  text: 'Profile',
  active: false
}