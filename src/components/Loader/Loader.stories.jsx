import React from "react";
import { Loader, Backdrop } from "./Loader";

export default {
  title: "Loader",
  component: Loader,
  subcomponents: { Backdrop },
  description: `Loader.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Loader {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  //dashboard props
  packages: "dashboard",
  type: "cubes",
  color: "#2D67CB",
  text: "",
  height: 64,
  width: 64,
  bgColor: "rgba(0, 0, 0, 0.5)",
  textColor: "white",
  //portal props
  isFixed: false,
  isInline: true,
  colorclassname: "teal",
  transparent: false,
};
