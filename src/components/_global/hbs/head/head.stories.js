import defaultdata from "./head.data.json";
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../helpers/handlebars.init.js";

export default {
  tags: ["autodocs"],
  title: "0.3. Templates And Patterns/Partials/Head/Includes CDN or Local",
  render: (args) => {
    handlebarsInit(Handlebars)
    return Handlebars.compile("{{>head }}")(args);
  },

  argTypes: {
      themeOverride: {
          description: "Storybook only: Disable theme injection",
      },
    cdn: {
      name: "CDN",
      description: `CDN prefix or provided text`,
      control: { type: 'radio' ,
        labels: { 'DEV': 'DEV', 'TEST' : 'TEST','BETA':'BETA','STAGING':'STAGING','PROD':'PROD','/__data/assets/git_bridge/0026/471752': 'SQUIZ Custom'},
      },
      options: [
        "DEV",
        "TEST",
        "BETA",
        "STAGING",
        "PROD",
        "/__data/assets/git_bridge/0026/471752",
      ],
    },
  },

  parameters: {
    docs: {
      controls: {

      },
    },
  },
};

/**
 * Default head metadata
 *
 */
export const Default = {
  args:  {
      ...defaultdata,
      themeOverride: "Disabled", //Don't inject div wrapper on root story inside previw.js
  },
  decorators: [
    (Story) => {
      return `
          ${Story()}
      `;
    },
  ],
};


export const DEV = {
  args: {
    cdn: "DEV",
  },
  decorators:[Story => {
    return `
          ${Story()}
      `;
  }],
};

export const SQUIZ = {
  args: {
    cdn: "/__data/assets/git_bridge/0026/471752",
  },
  decorators:[Story => {
    return `
          ${Story()}
      `;
  }],
};


