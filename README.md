## Most Important

Github pages does some weird things to links. It places a forward slash after the URL, whether or not it is called for in the link. This has many unintended consequences, almost random-appearing especially broken links to pages and images, and malfunctions of the back and page reload buttons. The following methods were determined to be most reliable:

* Pages should be added to the `/docs` directory.

* Images on doc pages must be added to `/website/static/docs/{pagename}/` directory, i.e, you need to make a directory for each page that has an image and drop the image file into it.

> NOTE: Do not put images intended for doc pages in the `website/static/img` directory

* Links from one doc page to another doc page must be in the form: `[Link to Studies page](/docs/studies/)`

> NOTE: the slashes before and after the link. Do not include the `.md` suffix. See test-page.md for further details.

* Links to images must be in the form: `![Observational Study Process](process-overview.png)`

* Links in custom pages (such as `website/scr/pages/index.js) are **different**. Here are some examples:
  * `<a className={styles.contentAction} href="docs/cohorts/">`
  * `<img src="img/icons/chevron-right.svg" height={8} width={8} />`

* Menu bar links, defined in `docusaurus.config.js` are similar to custom pages:
  * `{ to: 'docs/overview/', label: 'Overview', position: 'right' },`

## Updating Data Dictionary Contents

The data dictionary is built from the contents of the `/dictionary` directory. Changes are NOT automatically included in the website. The dictionary content can be split among multiple files. See one of the existing files for format. 

The only required file is `main.json`.

To update the data dictionary contents, the process has been scripted so it can be run by following the commands below:

1. From the argo-docs root directory:

```
cd scripts
```

2. Install script dependencies (first time only):

```
npm ci
```

3. Run the 'Add Dictionary' script:

```
npm run add
```

4. Follow the prompts in the script - you should accept the default file location. You can specify the version of the DD from the prompt (if you forgot to do it in `main.json`.

5. Once the new data has been saved, the script will ask you which version to make the default on the site - select this version from the list using your keyboard arrow keys.

6. The script adds files in the following places:

   - /website/static/data/schemas/{{version number}}
   - /website/static/data/schemas/diffs/{{version number}}

   And modified the following files:

   - /website/static/data/schemas/schema-versions.json
   - /website/src/pages/dictionary/data.json
   - /website/src/pages/dictionary/tree.json

### Adding custom pages (rare)

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://docusaurus.io/docs/en/custom-pages).

## Running the Site Locally

You can run the doc site locally to see edits to the documents in real time. To get started:

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ npm i
```

2. Run the dev server:

```sh
# Start the site
$ npm start
```

The docs should open in a new page in your browser. While the server is running, you can find the site at [http://localhost:3000](http://localhost:3000)


## Deploying to the `mcovid.org` website

The `mcovid.org` site displays pages from `github.com/markkramerus/markkramerus.github.io` repository through redirection. 

Mark Kramer bought the mcovid.org domain through GoDaddy and has access the GoDaddy site. The `mcovid.org` DNS is controlled through GoDaddy.org control panel. The domain is due to expire around 4/7/2021.

1. Clone the `github.com/markkramerus/markkramerus.github.io` repository.
1. From the `/website` directory:
```
 $ npm run build
```
1. Copy the all files in `website/build` to your local copy of the `markkramerus.github.io` repository. 
> NOTE: When cleaning the old files, **be careful not to delete the CNAME file**! If you do, the mcovid.org site will bring up a message like "Not github pages found at this location".
1. Commit the new files to `markkramerus.github.io` repository master branch (or do a pull request)
1. Github pages does the rest; new pages should be viewable in less than a minute

