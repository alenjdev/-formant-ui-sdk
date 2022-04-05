import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "@formant/ui-sdk/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);
export const Display = Template.bind({});
Display.args = {
  type: "display",
  children: "Hello world!",
};

export const h1 = Template.bind({});
h1.args = {
  type: "h1",
  children: "Hello world!",
};

export const h2 = Template.bind({});
h2.args = {
  type: "h2",
  children: "Hello world!",
};

export const h3 = Template.bind({});
h3.args = {
  type: "h3",
  children: "Hello world!",
};

export const h4 = Template.bind({});
h4.args = {
  type: "h4",
  children: "Hello world!",
};

export const body = Template.bind({});
body.args = {
  type: "body",
  children: "Hello world!",
};

export const list = Template.bind({});
list.args = {
  type: "list",
  children: "Hello world!",
};

export const label = Template.bind({});
label.args = {
  type: "label",
  children: "Hello world!",
};

export const minimum = Template.bind({});
minimum.args = {
  type: "minimum",
  children: "Hello world!",
};
