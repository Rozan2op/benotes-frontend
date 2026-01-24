// scan_pdfs.js - Shared Subject Scanner
const fs = require('fs');
const path = require('path');

const PDF_ROOT = path.join(__dirname, 'pdf');
const OUTPUT_FILE = path.join(__dirname, 'manual_data.js');

// We will organize files ONLY by Subject Name, ignoring Faculty
const sharedResources = {}; 

function scanDir(directory) {
    if (!fs.existsSync(directory)) return;

    const items = fs.readdirSync(directory);

    items.forEach(item => {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDir(fullPath);
        } else if (item.toLowerCase().endsWith('.pdf')) {
            // Path structure: pdf / [Faculty] / [Sem] / [Subject Name] / [Type] / file.pdf
            const parts = fullPath.split(path.sep);
            const pdfIndex = parts.indexOf('pdf');
            
            if (pdfIndex === -1 || parts.length < pdfIndex + 4) return;

            // Extract just the Subject Name and Type
            const subjectName = parts[pdfIndex + 3]; 
            const category = parts[pdfIndex + 4]; // e.g., "Text Book"
            
            // Create the web link
            const relativeLink = parts.slice(pdfIndex).join('/');

            // Initialize list for this Subject Name if not exists
            if (!sharedResources[subjectName]) {
                sharedResources[subjectName] = [];
            }

            // Add file to this Subject's shared list
            sharedResources[subjectName].push({
                type: category,
                name: item.replace('.pdf', ''),
                link: relativeLink
            });
            
            console.log(`🔗 Linked: "${item}" to Subject: [${subjectName}]`);
        }
    });
}

console.log("🔍 Scanning and linking subjects across faculties...");
scanDir(PDF_ROOT);

const fileContent = `// AUTO-GENERATED: Shared Subject Data
window.manualResources = ${JSON.stringify(sharedResources, null, 4)};
`;

fs.writeFileSync(OUTPUT_FILE, fileContent);
console.log(`🎉 Success! Files are now shared across all matching subjects.`);