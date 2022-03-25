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
  size: 20,
  name: "menu",
};
