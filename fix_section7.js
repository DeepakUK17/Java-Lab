const fs = require('fs');

const orig = fs.readFileSync('original_app.js', 'utf8');

const section7Str = '  //  SECTION 7 — PATTERNS';
const startIdx = orig.lastIndexOf('  // ███████████████████████████████████████████\n' + section7Str);

if (startIdx === -1) {
    // try with \r\n
    const startIdx2 = orig.lastIndexOf('  // ███████████████████████████████████████████\r\n' + section7Str);
    if (startIdx2 !== -1) extract(startIdx2);
    else {
        // Just find the title
        const regex = /\/\/\s*SECTION 7/i;
        const match = orig.match(regex);
        if (match) extract(orig.lastIndexOf('  // ████', match.index));
    }
} else {
    extract(startIdx);
}

function extract(startIndex) {
    const endIdx = orig.indexOf('];', startIndex);
    
    let content = orig.substring(startIndex, endIdx).trim();
    
    // Sometimes it ends with a comma
    if (content.endsWith(',')) content = content.slice(0, -1);

    const fileContent = `export const section7 = ${content};\n`;
    fs.writeFileSync('data/section7_patterns.js', fileContent);
    console.log('Fixed section7_patterns.js');
}
