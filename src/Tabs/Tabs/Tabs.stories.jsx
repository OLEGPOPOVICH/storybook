import { Tabs } from "./Tabs";

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: 'array' }
  }
}

const Template = (args) => <Tabs {...args} />

export const Base = Template.bind({});
Base.args = {
  tabs: [
    {text: 'Profile', renderContent: () => <div>Profile</div>},
    {text: 'Contact', renderContent: () => <div>Contact</div>},
    {text: 'Settings', renderContent: () => <div>Settings</div>}
  ],
}