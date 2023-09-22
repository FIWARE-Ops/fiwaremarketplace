const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/research-development/';
const RESEARCH_DEVELOPMENT_DIR = 'directories/research-development';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/research-development/images/r-and-d-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractProjects(input) {
    const today = new Date();
    const projects = [];
    input.forEach((item) => {
        const project = {
            name: item['Name'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            domains: Parser.splitStrings(item['Domain']),
            technologies: Parser.splitStrings(item['Technology']),
            type: item['Type'],
            contact: item['Contact'],
            linkedIn: item['LinkedIn'],
            twitter: item['Twitter'],
            website: item['Website'],
            partners: item['Partners'],
            partnersLocation: item['Partner Location'],
            tenderLink: item['Tender Link'],
            partnersDetails: Parser.markdown(item['Partner Details']),
            grantAgreement: item['Grant Agreement'],
            flag: item['Flag'],
            startDate: Parser.date(item['Start Date']),
            endDate: Parser.date(item['End Date']),
            country: item['Funded By'],
            disclaimant: item['Disclaimant'],
            excerpt: item['Excerpt'],
            description: Parser.markdown(item['Description']),
            program1: Parser.notBlank(item['Program 1']),
            program1Link: Parser.notBlank(item['Program 1 Link']),
            program2: Parser.notBlank(item['Program 2']),
            program2Link: Parser.notBlank(item['Program 2 Link']),
            topic: Parser.notBlank(item['Topic']),
            topicLink: Parser.notBlank(item['Topic Link']),
            article1: Parser.notBlank(item['Article 1']),
            article1Link: Parser.notBlank(item['Article 1 Link']),
            article2: Parser.notBlank(item['Article 2']),
            article2Link: Parser.notBlank(item['Article 2 Link']),
            publish: Parser.boolean(item['Published'])
        };

        project.year = project.startDate ? project.startDate.getFullYear().toString() : 'unknown';
        project.type = project.endDate < today ? 'Completed' : 'Ongoing';

        const filename= Template.createClass(project.name);
        project.social = `/project/${filename}.html`
        


        if (project.website || project.twitter || project.linkedIn) {
            project.contacts = true;
        }

        if (project.publish) {
            projects.push(project);
        }
    });

    if (projects.length === 0) {
        console.error('ERROR: No projects uploaded.');
        process.exit(1);
    }
    console.log(projects.length, ' projects generated.');

    return projects.sort((a, b) => {
         return ('' + a.name.toLowerCase()).localeCompare(b.name.toLowerCase());
    });
}

/**
 * Read in the research-development file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractProjects(input);
        })
        .then((projects) => {
            const filterData = {
                years: Sorter.sortData(projects, 'year'),
                types: Sorter.sortData(projects, 'type'),
                domains: Sorter.flatSortData(projects, 'domains'),
                countries: Sorter.flatSortData(projects, 'country'),
                projects
            };

            Template.write(
                path.join(RESEARCH_DEVELOPMENT_DIR, 'research.html'),
                path.join(TEMPLATE_PATH, 'card.hbs'),
                projects
            );
            Template.write(
                path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'),
                path.join(TEMPLATE_PATH, 'modal.hbs'),
                filterData
            );
            Template.write(
                path.join(RESEARCH_DEVELOPMENT_DIR, 'filters.html'),
                path.join(TEMPLATE_PATH, 'filter.hbs'),
                filterData
            );
            Template.write(
                path.join(RESEARCH_DEVELOPMENT_DIR, 'project/pageData.js'),
                path.join(TEMPLATE_PATH, 'details.hbs'),
                projects
            );

            Template.write(
                path.join(RESEARCH_DEVELOPMENT_DIR, 'project/sitemap.html'),
                path.join(TEMPLATE_PATH, 'sitemap.hbs'),
                projects
            );

             projects.forEach ((project, index) =>{

                const filename= Template.createClass(project.name);
                Template.write(
                    path.join(RESEARCH_DEVELOPMENT_DIR, `project/${filename}.html`),
                    path.join(TEMPLATE_PATH, 'social-media.hbs'),
                project);
                Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, `project/${filename}.html`), { parser: 'html' });

            });

            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'research.html'), { parser: 'html' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'project/pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'project/sitemap.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
exports.file = 'research-development.csv';
