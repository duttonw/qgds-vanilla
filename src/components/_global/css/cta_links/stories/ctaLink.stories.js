/**
 * @file cta_link.stories.js
 * @description Storybook configuration file for the Call to Actions links component.
 * @module cta_link.stories
 */

import exampleLinkData from "./exampleLink.json";
import exampleTemplate from "./example.test.hbs?raw";



// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../../../.storybook/helpers.js";


export default {
    title: "!Globals/Link (Call To Action)",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            var templateData = Handlebars.compile(exampleTemplate )(unflattenJson(args))
            return `
            ${templateData}
            `
        } catch (e) {
            console.log(e)
            return "error:" + JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: flattenJson(exampleLinkData),
    argTypes: {
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        "component.data.url": {
            control: 'text',
            name: 'URL',
        },
        "component.data.view_all": {
            control: 'boolean',
            name: 'View all'
        },
        "component.data.disabled": {
            control: 'boolean',
            name: 'Disabled',
        },
        "component.data.value": {
            control: 'text',
            name: 'Link Text',
        },
    },


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
        design: [
            {
            name: "QGDS Text Links Figma Reference Link",
            type: "link",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-98065",
        },{
            name: "QGDS Text Links  Figma Reference",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-98065",
        },
            ]
    },
};

/**
 * Default cta_link  story
 *
 */
export const Default = {};

// /**
//  * Default linked_list (inline) story
//  * This is showing buttons list (inline)
//  */
// export const linkedListInline = {
//     label: "Linked List (Inline)",
//     args: exampleButtonsInlineData
// };
