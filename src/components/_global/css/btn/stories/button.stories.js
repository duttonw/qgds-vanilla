/**
 * @file banner.stories.js
 * @description Storybook configuration file for the Accordion component.
 * @module accordion.stories
 */

import examplePrimaryData from "./examplePrimary.json";
import exampleTemplate from "./example.test.hbs?raw";
import exampleSecondaryData from "./exampleSecondary.json";
import exampleTertiaryData from "./exampleTertiary.json";
import example2html from "./example2.html?raw";
import example3html from "./example3.html?raw";
import example4html from "./example4.html?raw";
import example5html from "./example5.html?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";


export default {
    title: "Components/Buttons",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            var templateData = Handlebars.compile(exampleTemplate )(args)
            return `
            ${templateData}
            `
        } catch (e) {
            console.log(e)
            return "error:" + JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: examplePrimaryData,


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
 * Primary Buttons
 */
export const PrimaryButtons = {
    args: examplePrimaryData

}

/**
 * Secondary Buttons
 */
export const SecondaryButtons = {
    args: exampleSecondaryData
}
/**
 * Tertiary Buttons
 */
export const TertiaryButtons = {
    args: exampleTertiaryData
}
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
