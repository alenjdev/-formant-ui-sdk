import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingIndicator from "./LoadingIndicator";

export default {
  title: "@formant/ui-sdk/LoadingIndicator",
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const small = Template.bind({});
small.args = {
  size: "small",
};

export const medium = Template.bind({});
medium.args = {
  size: "medium",
};

export const large = Template.bind({});
large.args = {
  size: "large",
};
