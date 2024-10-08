/**
 * @file linkedList.stories.js
 * @description Storybook configuration file for the Linked List component.
 * @module linkedList.stories
 */

import exampleButtonsData from "./exampleButtons.json";
import exampleButtonsInlineData from "./exampleButtonsInline.json";
import exampleTemplate from "./example.test.hbs?raw";



// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../../../.storybook/helpers.js";


export default {
    title: "!Globals/Link List",
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
    args: flattenJson(exampleButtonsData),
    argTypes: {
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        'component.data.type': {
            control: 'radio',
            name: 'List Type',
            options: ['list', 'inline']
        },
        'component.data.items': {
            control: 'array',
            name: 'Items',
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
        design: {
            name: "QGDS Figma Reference",
            type: "figma",
            url: "https://www.figma.com/file/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?type=design&node-id=6276-45691&mode=design&t=crJKtPwMG2IcZf5E-4",
        },
    },
};

/**
 * Default linked_list story
 * This is showing buttons list
 */
export const Default = {
};

/**
 * Default linked_list (inline) story
 * This is showing buttons list (inline)
 */
export const linkedListInline = {
    label: "Linked List (Inline)",
    args: flattenJson(exampleButtonsInlineData)
};
