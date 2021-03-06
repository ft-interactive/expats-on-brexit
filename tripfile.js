/* eslint-disable no-console */

import dotenv from 'dotenv';
import fetch from 'node-fetch';
import sander from 'sander';
import MarkdownIt from 'markdown-it';
import Soup from 'soup';

dotenv.config({ silent: true });

console.assert(process.env.SPREADSHEET_KEY, 'Environment var SPREADSHEET_KEY should be set.');

const url = `http://bertha.ig.ft.com/republish/publish/gss/${process.env.SPREADSHEET_KEY}/opinions,countries,options`;

/**
 * Task to get the data and save it as app/data.json (which is gitignored).
 */

export async function data() {
  const res = await fetch(url);
  console.assert(res.ok);

  const downloadedData = await res.json();

  const finalData = {
    ...downloadedData,
    options: {},
  };

  // turn the options sheet into a key-value object
  for (const { name, value } of downloadedData.options) {
    finalData.options[name] = value;
  }

  // convert certain options from markdown to HTML
  const md = new MarkdownIt({ xhtmlOut: true });
  // for (const name of ['bodyCopy', 'standfirst']) {
  //   finalData.options[name] = md.render(finalData.options[name]);
  // }

  function isInEU(country) {
    for (const { name, eu } of finalData.countries) {
      if (name === country) return !!eu;
    }

    throw new Error(`Unknown country: ${country}`);
  }

  // fix opinions sheet
  finalData.opinions.forEach((row, i) => {
    /* eslint-disable no-param-reassign */
    row.displayLocation = row.displaylocation;
    delete row.displaylocation;

    row.canVote = row.canvote;
    delete row.canvote;

    row.textHTML = md.render(row.text);
    delete row.text;

    row.leaningRemain = (row.leaning.toLowerCase() === 'r');
    row.leaningLeave = (row.leaning.toLowerCase() === 'l');
    row.leaningUnsure = (row.leaning.toLowerCase() === 'u');
    delete row.leaning;

    row.livingInEU = isInEU(row.country);
    row.livingOutsideEU = !row.livingInEU;

    row.key = i + 1;
    /* eslint-enable no-param-reassign */
  });

  // exclude countries that don't appear in the opinions data
  finalData.countries = finalData.countries.filter(country => {
    for (const opinion of finalData.opinions) {
      if (opinion.country === country.name) return true;
    }

    return false;
  });

  await sander.writeFile(
    'app',
    'data.js',
    `export default ${JSON.stringify(finalData, null, 2)};`
  );
}


/**
 * hack to fix the build (runs as the last part of `npm run build`)
 *
 * - copies index.html to make the other files
 *   - but with different page titles
 *   - and nullifies
 */
export async function fixbuild() {
  const soup = new Soup(await sander.readFile('build', 'index.html'));

  // define mapping of pages (without extension) to desired page titles
  const pages = {
    explore: 'Explore British expat perspectives on Brexit and add your own',
    filter: 'Filter results',
    form: 'Add your perspective',
  };

  // delete the 'canonical' link (just deleting the attrs will do for now)
  soup.setAttribute('link[rel=canonical]', 'href', false);
  soup.setAttribute('link[rel=canonical]', 'rel', false);

  // loop over to write them all
  for (const page of Object.keys(pages)) {
    soup.setInnerHTML('title', () => pages[page]);

    // TODO maybe prerender the body?

    await sander.writeFile('build', `${page}.html`, soup.toString());
  }
}
