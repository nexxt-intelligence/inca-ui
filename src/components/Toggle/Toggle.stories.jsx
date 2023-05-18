import React from "react";
import { Toggle } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
  description: `Toggle.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Toggle {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  label: "label",
  checked: false,
  className: "without-label",
  onChange: () => {},
  position: "left",
};
