import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Formant from "./Formant";

export default {
  title: "@formant/ui-sdk/Formant",
  component: Formant,
} as ComponentMeta<typeof Formant>;

const Template: ComponentStory<typeof Formant> = (args) => (
  <Formant {...args} />
);

export const wrapper = Template.bind({});
wrapper.args = {
  children: (
    <div style={{ height: "200vh" }}>
      <p>Hello</p>
    </div>
  ),
};
