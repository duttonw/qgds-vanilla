
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../helpers/handlebars.init.js";
import metaOpenGraphData from "./../metaOpenGraph/MetaOpenGraph.data.json";
import { dcTerms } from './../metaDcTerms/MetaDcTerms.data.json';
import leftHandNavigationData from './../../../left_hand_navigation/html/example1.json';
import headerData from "./../../../../components/header/html/example1.json";
import navigationData from "./../../../../components/mega_main_navigation/html/example1.json";
import breadcrumbsData from "./../../../../components/breadcrumbs/html/example1.json";
import internal_navigationData from "./../../../../components/internal_navigation/html/example1.json";
import widgetsData from "./../../../../components/widgets/html/example1.json";
import footerData from "./../../../../components/footer/html/example1.json";

let site = {
    "metadata": {
        "siteDefaultIcons": {
            "value": "./assets/img/svg-icons.svg"
        },
    }
}

/** sample data **/
const defaultdata = {
    cdn: ".", //for storybook it's ., for normal usage "PROD"
    site: site, //needed for svg icons to function
    title: "title goes here",
    description: "my description",
    uri: "http://localhost/uri/here",
    dcTerms: dcTerms,
    seo: metaOpenGraphData.seo,
    og: metaOpenGraphData.og,
    header: headerData,
    // search: searchData,
    navbar: navigationData,
    breadcrumbs: breadcrumbsData,
    internal_navigation: internal_navigationData,
    inpagenav: leftHandNavigationData,
    widgets: widgetsData,
    footer: footerData,
};

export default {
  title: "0.3. Templates And Patterns/Partials/FullPage",
  render: (args) => {
    handlebarsInit(Handlebars)
    return Handlebars.compile(`
{{#>fullPage}}
<h1>my title</h1>
  my main content goes here

          <p>this is something</p>


{{/fullPage}}
`)(args);
  },

  argTypes: {
      themeOverride: {
          description: "Storybook only: Disable theme injection",
      },
  },

  parameters: {
      layout: 'fullscreen', // This makes the story render in iframe mode in fullscreen
      fullPage: true,
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



