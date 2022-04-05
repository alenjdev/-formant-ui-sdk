import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import EventAlert from "./EventAlert";

export default {
  title: "@formant/ui-sdk/EventAlert",
  component: EventAlert,
} as ComponentMeta<typeof EventAlert>;

const Template: ComponentStory<typeof EventAlert> = (args) => (
  <EventAlert {...args} />
);

export const Open = Template.bind({});
Open.args = {
  msg: "Notification",
  eventType: "open",
};

export const Info = Template.bind({});
Info.args = {
  msg: "Waiting for data",
  eventType: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  msg: "Something overload",
  eventType: "warning",
};

export const Error = Template.bind({});
Error.args = {
  msg: "Error",
  eventType: "error",
};

export const Critical = Template.bind({});
Critical.args = {
  msg: "Dead",
  eventType: "critical",
};
