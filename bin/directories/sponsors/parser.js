const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/sponsors/';
const SPONSORS_DIR = 'directories/sponsors';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/sponsors/images/sponsor-default.png';

const regex = /([^a-zA-Z0-9À-ÿ])/gi;

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of sponsors for later use
 */
function extractSponsors(input) {
    const sponsors = [];
    input.forEach((item) => {
        const sponsor = {
            name: item.Name.toUpperCase(),
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            type: item.Type,
            exhibitor: item.Exhibitor,
            priority: item.Priority,
            website: item.Website,
            bio: item.Description ? item.Description.replaceAll(/[\n\r]+/g, ' ').trim() : '', 
            linkedIn: Parser.trim(item.LinkedIn),
            twitter: Parser.trim(item.Twitter),
            publish: Parser.boolean(item.Published)
        };

        if (sponsor.publish) {
            sponsors.push(sponsor);
        }
    });

    if (sponsors.length === 0) {
        console.error('ERROR: No sponsors uploaded.');
        process.exit(1);
    }
    console.log(sponsors.length, ' sponsors generated.');

    return sponsors.sort((a, b) => {
        if (a.priority !== b.priority){
            return a.priority - b.priority;
        }
        return String(a.name.toLowerCase()).localeCompare(b.name.toLowerCase());
    });
}

/**
 * Read in the sponsors file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractSponsors(input);
        })
        .then((sponsors) => {
            const filterData = {
                types: Sorter.sortData(sponsors, 'type'),
                names: Sorter.sortData(sponsors, 'name'),
                sponsors
            };

            Template.write(
                path.join(SPONSORS_DIR, 'sponsors.html'),
                path.join(TEMPLATE_PATH, 'card.hbs'),
                sponsors
            );
            Template.write(
                path.join(SPONSORS_DIR, 'pageData.js'),
                path.join(TEMPLATE_PATH, 'modal.hbs'),
                filterData
            );
            Template.write(
                path.join(SPONSORS_DIR, 'filters.html'),
                path.join(TEMPLATE_PATH, 'filter.hbs'),
                filterData
            );

            Prettier.format(path.join(SPONSORS_DIR, 'sponsors.html'), { parser: 'html' });
            Prettier.format(path.join(SPONSORS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(SPONSORS_DIR, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'sponsors.csv';
