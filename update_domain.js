const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else if (filePath.endsWith('.js')) {
      files.push(filePath);
    }
  }
  return files;
}

const files = getFiles('app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('https://raymondtheaddressbygsmumbai.com')) {
    content = content.replace(/https:\/\/raymondtheaddressbygsmumbai\.com/g, 'https://raymondrealtyprelaunch.in');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
