const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'TD7.jpg');
const destDir = path.join(__dirname, '..', 'client', 'public');
const dest = path.join(destDir, 'TD7.jpg');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
} else {
    console.error(`Source file ${src} not found`);
}
