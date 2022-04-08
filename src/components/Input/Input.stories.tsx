import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "./Input";

export default {
  title: "@formant/ui-sdk/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  type: "text",
  label: "Name",
};

export const LargeError = Template.bind({});
LargeError.args = {
  name: "test",
  type: "text",
  label: "Name",
  error: true,
};

export const Small = Template.bind({});
Small.args = {
  type: "password",
  label: "Name",
  inputType: "small",
};

export const SmallError = Template.bind({});
SmallError.args = {
  type: "number",
  label: "Name",
  inputType: "small",
  error: true,
};

export const Simple = Template.bind({});
Simple.args = {
  type: "text",
  label: "Name",
  inputType: "simple",
  helperText: "helper text",
  placeHolder: "Email",
};
