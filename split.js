const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

const regex = /\s*\/\/\s*███████████████████████████████████████████\r?\n\s*\/\/\s*SECTION\s*\d+\s*—\s*(.*?)\r?\n\s*\/\/\s*███████████████████████████████████████████\r?\n\s*\{/g;

let matches = [];
let match;
while ((match = regex.exec(appJs)) !== null) {
    matches.push({ title: match[1].trim(), index: match.index });
}

// Find the end of SECTIONS
const endIdx = appJs.indexOf('];', matches[matches.length - 1].index);

if (!fs.existsSync('data')) fs.mkdirSync('data');

let sectionNames = [];
for (let i = 0; i < matches.length; i++) {
    let start = matches[i].index;
    let end = (i === matches.length - 1) ? endIdx : matches[i+1].index;
    let content = appJs.substring(start, end).trim();
    if (content.endsWith(',')) content = content.slice(0, -1);

    const sectionName = matches[i].title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const fileName = `section${i+1}_${sectionName}.js`;
    sectionNames.push({ name: `section${i+1}`, file: `./data/${fileName}` });
    fs.writeFileSync(`data/${fileName}`, `export const section${i+1} = ${content};\n`);
    console.log(`Created ${fileName}`);
}

let imports = sectionNames.map(s => `import { ${s.name} } from '${s.file}';`).join('\n');
let arrayContent = `\nconst SECTIONS = [\n  ${sectionNames.map(s => s.name).join(',\n  ')}\n];\n`;

const topPart = appJs.substring(0, appJs.indexOf('const SECTIONS = ['));
const bottomPart = appJs.substring(endIdx + 2);

fs.writeFileSync('app.js', topPart + imports + '\n' + arrayContent + bottomPart);
console.log("Updated app.js successfully.");
