# GILT2017

## Setting up the development

1. Dowload Node JS and install (https://nodejs.org/en/)
2. Open cmd/terminal and type 'npm install npm@latest -g'
2. Clone the Git repository to you local server (MAMP)
3. Navigate to the repository folder in cmd/terminal
4. Type 'npm install'
5. Wait until npm installed everything (this might take a while)
## Working on development CSS
1. Start MAMP
2. Navigate to the repository folder in cmd/terminal
3. Type 'grunt watch' (this will watch your changes in the .js and .less files and will compile them into large .js and .css files)
4. Go to http://www.getintolondontheatre.co.uk/user/ and use your credentials to login
5. A green (or red) bar should appear at the top of each page
6. Type your local css file URL into CSS URL (my one example: http://localhost/solt/gilt/gilt2017/dist/gilt.min.css)
7. If everything is fine you can swap between live and local versions by clicking on the checkbox in the top bar
8. Change your .less files and wait a few seconds while grunt is compiling the .css file
9. Refresh the GILT page (and be sure you are in DEV) to see the changes
Please note that you might going to have issues with assets (such as fonts) due to cross browser problems

### Publishing

If everything is fine copy-paste the complied .css file to GILT2017.css (c1920.css) in Unify and check.

### Quick fixes and files

There are three .css file structure:
- GILT2017 Fonts (c1922.css) for font and glyphicon imports
- GILT2017 (c1920.css) the main compiled CSS
- GILT2017 Plus (c1921.css) to overwrite the declarations in GILT2017

If there is a request for a quick fix you can update GILT2017 Plus (c1922.css) to overwrite anything in the main CSS

## Working on development JS

Even though there is a field for a dev .js file the previous method won't work. If you need to add any new script create a test page and use an inline script which you can later copy into a newly created file. Same as before.

The main .js file is nothing more than a bundle of libraries.
- jQuery
- Bootstrap
- Moment.js (http://momentjs.com/)
- Bootstrap datepicker (http://eonasdan.github.io/bootstrap-datetimepicker/)
