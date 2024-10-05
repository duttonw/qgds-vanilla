/**
 * @file banner.stories.js
 * @description Storybook configuration file for the Accordion component.
 * @module accordion.stories
 */

import example1 from "../html/example1.json";
let defaultdata = example1
import example1template from "./../html/example1.test.hbs?raw";
import example2html from "./../html/example2.html?raw";
import example3html from "./../html/example3.html?raw";
import example4html from "./../html/example4.html?raw";
import example5html from "./../html/example5.html?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";


export default {
    title: "Components/Accordion",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example1template )(args)
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: example1,


    /**
     * Additional parameters for the story.
     *
     * @type {Object}
     * @property {Object} design - Configuration for the design parameter.
     * @property {string} design.name - Name of the design parameter.
     * @property {string} design.type - Type of the design parameter.
     * @property {string} design.url - URL of the design parameter.
     */
    parameters: {
        design: {
            name: "QGDS Figma Reference",
            type: "figma",
            url: "https://www.figma.com/file/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?type=design&node-id=6276-45691&mode=design&t=crJKtPwMG2IcZf5E-4",
        },
    },
};

/**
 * Default Accordion story
 */
export const Default = {};

/**
 * Single light
 */
export const SingleLight = {
    render: () => {
        return example2html;

    },
    args: {},

}
/**
 * Single dark
 */
export const SingleDark = {
    render: () => {
        return example3html;

    },
    args: {},

}
/**
 * Multi light
 */
export const MultiLight = {
    render: () => {
        return example4html;

    },
    args: {},

}
/**
 * Single dark
 */
export const MultiDark = {
    render: () => {
        return example5html;

    },
    args: {},

}
//
// /**
//  * Accordion in 'Light' colour theme.
//  */
// export const Light = {
//   args: {
//     ...defaultdata,
//     groupid: "accordion-group-light",
//     accordionItems: {
//       0: { ...defaultdata.accordionItems[0], id: "light-one" },
//       1: { ...defaultdata.accordionItems[1], id: "light-two" },
//       2: { ...defaultdata.accordionItems[2], id: "light-three" },
//     },
//   },
//   parameters: {
//     backgrounds: {
//       default: "Light",
//       values: [{ name: "Light", value: "var(--qld-light-background)" }],
//     },
//   },
//   decorators: [
//     (Story) => {
//       return `
//       <div class="container-fluid"><div class="row"><div class="col-12">
//       <div class="light">
//           ${Story()}
//       </div>
//       </div></div></div>
//       `;
//     },
//   ],
// };
//
// /**
//  * Accordion in 'Alternative' colour theme.
//  */
// export const Alternative = {
//   args: {
//     ...defaultdata,
//     groupid: "accordion-group-alt",
//     accordionItems: {
//       0: { ...defaultdata.accordionItems[0], id: "alt-one" },
//       1: { ...defaultdata.accordionItems[1], id: "alt-two" },
//       2: { ...defaultdata.accordionItems[2], id: "alt-three" },
//     },
//   },
//   parameters: {
//     backgrounds: {
//       default: "Alternative",
//       values: [{ name: "Alternative", value: "var(--qld-light-grey-alt)" }],
//     },
//   },
//   decorators: [
//     (Story) => {
//       return `
//       <div class="container-fluid"><div class="row"><div class="col-12">
//       <div class="alt">
//           ${Story()}
//       </div>
//       </div></div></div>
//       `;
//     },
//   ],
// };
//
// /**
//  * Accordion in 'Dark' colour theme.
//  */
// export const Dark = {
//   args: {
//     ...defaultdata,
//     groupid: "accordion-group-dark",
//     accordionItems: {
//       0: { ...defaultdata.accordionItems[0], id: "dark-one" },
//       1: { ...defaultdata.accordionItems[1], id: "dark-two" },
//       2: { ...defaultdata.accordionItems[2], id: "dark-three" },
//     },
//   },
//   parameters: {
//     backgrounds: {
//       default: "Dark",
//       values: [{ name: "Dark", value: "var(--qld-sapphire-blue)" }],
//     },
//   },
//   decorators: [
//     (Story) => {
//       return `
//       <div class="container-fluid"><div class="row"><div class="col-12">
//       <div class="dark">
//           ${Story()}
//       </div>
//       </div></div></div>
//       `;
//     },
//   ],
// };
//
// /**
//  * Accordion in 'Dark alternative' colour theme.
//  */
// export const DarkAlternative = {
//   args: {
//     ...defaultdata,
//     groupid: "accordion-group-dark-alt",
//     accordionItems: {
//       0: { ...defaultdata.accordionItems[0], id: "dark-alt-one" },
//       1: { ...defaultdata.accordionItems[1], id: "dark-alt-two" },
//       2: { ...defaultdata.accordionItems[2], id: "dark-alt-three" },
//     },
//   },
//   parameters: {
//     backgrounds: {
//       default: "Dark alternative",
//       values: [{ name: "Dark alternative", value: "var(--qld-dark-blue)" }],
//     },
//   },
//   decorators: [
//     (Story) => {
//       return `
//       <div class="container-fluid"><div class="row"><div class="col-12">
//       <div class="dark-alt">
//           ${Story()}
//       </div>
//       </div></div></div>
//       `;
//     },
//   ],
// };
