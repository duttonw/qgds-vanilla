/**
 * @file typeography.stories.js
 * @description Storybook configuration file for the Typeography.
 * @module typeography.stories
 */

import exampleSingle from "./example.json";
import exampleAll from "./allTypography.json";
import exampleUnorderedList from "./unorderedList.json";
import exampleOrderedList from "./orderedList.json";
import exampleTemplate from "./example.test.hbs?raw";
import exampleAllThemesTemplate from "./exampleAllTheme.test.hbs?raw";



// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../../../.storybook/helpers.js";


export default {
    title: "!Globals/Typography",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            var templateData = Handlebars.compile(args.templateFile )(unflattenJson(args))
            return `
            ${templateData}
            `
        } catch (e) {
            console.log(e)
            return "error:" + JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: {
        ...flattenJson(exampleSingle),
        templateFile: exampleTemplate
    },
    argTypes: {
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        "component.type": {
            control: 'radio',
            name: 'Type',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'paragraph', 'link', 'abstract', 'figcaption', 'text', 'ul', 'ol', 'li']
        },
        "component.data.display": {
            control: 'radio',
            name: 'Display Size Override (Optional)',
            options: ['', 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']
        },
        "component.data.content": {
            control: 'text',
            name: 'Content',
        },
        "component.data.source": {
            control: 'text',
            name: 'Source (applicable for blockquote  only)',
        },
        "component.data.url": {
            control: 'text',
            name: 'Url (applicable for link only)',
        },
        "component.data.disabled": {
            control: 'boolean',
            name: 'Disabled (applicable for link only)',
        },
        "component.data.items": {
            control: 'list',
            name: 'List of other Components',
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
                name: "QGDS Figma Reference Link",
                type: "link",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-97992",
            },{
                name: "QGDS  Figma Reference",
                type: "figma",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-97992",
            },
        ]
    },
};

/**
 * Default typography story
 * This is showing buttons list
 */
export const Default = {};


/**
 *  Unordered List
 */
export const unorderdList = {
    args: {
        ...exampleUnorderedList,
        templateFile: exampleTemplate
    },
}

/**
 *  Unordered List
 */
export const orderdList = {
    args: {
        ...exampleOrderedList,
        templateFile: exampleTemplate
    },
}

/**
 * Component Global Elements
 */
export const componentGlobalElements = {
    args: {
        ...exampleAll,
        templateFile: exampleTemplate
    },
    // globals: { theme: 'Disabled' },
}

/**
 * All Themes Global Elements
 */
export const AllThemesGlobalElements = {
    args: { ...exampleAll,
        templateFile: exampleAllThemesTemplate},
    globals: { theme: 'Disabled' },
}
