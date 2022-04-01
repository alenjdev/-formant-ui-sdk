import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icon from "./Icon";

export default {
  title: "@formant/ui-sdk/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  size: "medium",
  name: "menu",
};

export const Device = Template.bind({});
Device.args = {
  size: "medium",
  name: "device",
};

export const Access = Template.bind({});
Access.args = {
  size: "large",
  name: "access",
};
