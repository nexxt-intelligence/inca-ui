import React from "react";
import { Header } from "./Header";
import { HelperTooltip } from "./HelperTooltip";

export default {
  title: "Header",
  component: Header,
  subcomponents: { HelperTooltip },
  description: `Header.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  className: "items-center",
  title: "TITLE",
  subTitle: "subTitle",
  status: "LIVE",
  dateTimeMessage: "date-time",
  isDevMode: false,
  isDash: false,
};
