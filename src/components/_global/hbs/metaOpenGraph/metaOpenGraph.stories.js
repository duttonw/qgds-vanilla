import MetaDcTermsData from "./MetaOpenGraph.data.json";
import Handlebars from "handlebars";
import handlebarsInit from "../../../../helpers/handlebars.init.js";

const defaultData = {
  ...MetaDcTermsData,
  title: "this is my title",
  uri: "https://forgov.qld.gov.au/projects-and-initiatives/search-for-projects-and-initiatives",
  description: "this is my description",
}

export default {
  tags: ["autodocs"],
  title: "0.3. Templates And Patterns/Partials/Head/Meta OpenGraph and SEO",
  args: defaultData,
  render: (args) => {

      handlebarsInit(Handlebars)
    return Handlebars.compile("{{>metaOpenGraph }}")(args);
  },

  argTypes: {
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
export const Default = {};



