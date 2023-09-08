const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/ihubs/';
const MARKETING_TOOLS_DIR = 'directories/marketing-tools';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/marketing-tools/images/iHub-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of tools for later use
 */
function extractTools(input) {
    const tools = [];
    input.forEach((item) => {
        const tool = {
            name: item['Name'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item['Domain']),
            type: item['Type'],
            website: item['Link'],
            publish: Parser.boolean(item['Published'])
        };

        if (tool.website || tool.twitter || tool.linkedIn) {
            tool.contacts = true;
        }

        if (tool.publish) {
            tools.push(tool);
        }
    });

    if (tools.length === 0) {
        console.error('ERROR: No tools uploaded.');
        process.exit(1);
    }
    console.log(tools.length, ' tools generated.');

    return tools.sort((a, b) => {
        return b.name - a.name;
    });
}

/**
 * Read in the iHubs file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractTools(input);
        })
        .then((tools) => {
            const filterData = {
                types: Sorter.sortData(tools, 'type'),
                domains: Sorter.flatSortData(tools, 'domain'),
                countries: Sorter.flatSortData(tools, 'country'),
                tools
            };

            Template.write(path.join(MARKETING_TOOLS_DIR, 'tools.html'), path.join(TEMPLATE_PATH, 'card.hbs'), tools);
            Template.write(path.join(MARKETING_TOOLS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(MARKETING_TOOLS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

            Prettier.format(path.join(MARKETING_TOOLS_DIR, 'tools.html'), { parser: 'html' });
            Prettier.format(path.join(MARKETING_TOOLS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(MARKETING_TOOLS_DIR, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
