import MetaDcTermsData from "./MetaDcTerms.data.json";

import Handlebars from "handlebars";
import handlebarsInit from "../../../../helpers/handlebars.init.js";


const defaultData = {
  ...MetaDcTermsData,
  uri: "https://forgov.qld.gov.au/projects-and-initiatives/search-for-projects-and-initiatives",
  description: "description goes here",
  title: "this is my title",
}

export default {
  tags: ["autodocs"],
  title: "0.3. Templates And Patterns/Partials/Head/Meta Dublin Core Terms (DCTERMS)",
  args: defaultData,
  render: (args) => {
      handlebarsInit(Handlebars)
    return Handlebars.compile("{{> metaDcTerms }}")(args);
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



