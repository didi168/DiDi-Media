const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Fix Security target="_blank" links
html = html.replace(/target="_blank"(?! rel=)/g, 'target="_blank" rel="noopener noreferrer"');

// 2. Fix Accessibility <img> tags missing alt
html = html.replace(/<img(.*?)>/g, (match, contents) => {
    if (!contents.includes('alt=')) {
        return `<img alt="Deus Vivens Studio Portfolio Asset" ${contents}>`;
    }
    return match;
});

// 3. Fix Form Validation missing required tags
html = html.replace(/<input(.*?)>/g, (match, contents) => {
    if (contents.includes('type="submit"') || contents.includes('required')) return match;
    return `<input required ${contents}>`;
});

html = html.replace(/<textarea(.*?)>(.*?)<\/textarea>/g, (match, contents, text) => {
    if (contents.includes('required')) return match;
    return `<textarea required ${contents}>${text}</textarea>`;
});

fs.writeFileSync(filePath, html);
console.log("Production HTML refactor complete!");
