const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/ihubs/';
const IHUBS_DIR = 'directories/ihubs';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/iHubs/images/iHub-default.png';


function trunc(value){
    return (Math.trunc(value *1000)/1000) - 0.0001;
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of iHubs for later use
 */
function extractIHubs(input) {
    const iHubs = [];
    input.forEach((item) => {
        const iHub = {
            name: item.Name,
            city: item.City,
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item.Domain),
            type: item.Type,
            linkedIn: item.LinkedIn,
            twitter: item.Twitter,
            website: item.Website,
            country: item.Country,
            flag: item['Country flag'],
            content: Parser.markdown(item.Content),
            publish: Parser.boolean(item.Published),
            latitude: trunc(Number(item.Latitude)),
            longitude: trunc(Number(item.Longitude)),
        };

        if (iHub.website || iHub.twitter || iHub.linkedIn) {
            iHub.contacts = true;
        }

        if (iHub.publish) {
            iHubs.push(iHub);
        }
    });

    if (iHubs.length === 0) {
        console.error('ERROR: No iHubs uploaded.');
        process.exit(1);
    }
    console.log(iHubs.length, ' iHubs generated.');

    return iHubs.sort((a, b) => {
        return String(a.name).localeCompare(b.name);
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
            return extractIHubs(input);
        })
        .then((iHubs) => {
            const filterData = {
                types: Sorter.sortData(iHubs, 'type'),
                domains: Sorter.flatSortData(iHubs, 'domain'),
                countries: Sorter.flatSortData(iHubs, 'country'),
                iHubs
            };

            Template.write(path.join(IHUBS_DIR, 'iHubs.html'), path.join(TEMPLATE_PATH, 'card.hbs'), iHubs);
            Template.write(path.join(IHUBS_DIR, 'iHubs.json'), path.join(TEMPLATE_PATH, 'map.hbs'), iHubs);
            Template.write(path.join(IHUBS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(IHUBS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

            Prettier.format(path.join(IHUBS_DIR, 'iHubs.html'), { parser: 'html' });
            Prettier.format(path.join(IHUBS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(IHUBS_DIR, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'iHubs.csv';
