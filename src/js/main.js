//JS
import globals from './globals.rollup.js';

//jquery used 'everywhere' in the project. This will need to be refactored to use vanilla JS.
import $ from 'jquery';
window.jQuery = window.$ = $;

//jquery-validation used in:
// * src/components/_global/js/forms/global.js
// * src/components/file_upload/js/global.js
//this will need to be refactored to use vanilla JS.
import 'jquery-validation';

//QLD is the debug console variable which surfaces the anon functions to the console.
var QLD = QLD ? QLD : {};
window.QLD = QLD;

globals(QLD);
