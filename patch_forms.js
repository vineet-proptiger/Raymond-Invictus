const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else if (filePath.endsWith('.jsx')) {
      files.push(filePath);
    }
  }
  return files;
}

const formFiles = getFiles('components');
let updatedCount = 0;

formFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Add website to state if form/formData exists
  if (content.includes('useState({') && content.includes('fullname')) {
    content = content.replace(/useState\(\{\s*(.*?)fullname\s*:\s*''(.*?)\}\)/g, 'useState({ $1fullname: \'\'$2, website: \'\' })');
  }

  // 2. Add website to FormData payload
  if (content.includes('payload.append(')) {
    if (!content.includes('payload.append(\'website\'')) {
      content = content.replace(/payload\.append\('fullname',\s*(.*?)\.fullname\)/g, 'payload.append(\'fullname\', $1.fullname)\n    payload.append(\'website\', $1.website || \'\')');
    }
  }

  // 3. Add hidden honeypot input to JSX
  if (content.includes('<form') && !content.includes('name="website"')) {
    const hiddenInput = `\n      {/* Honeypot */}\n      <input type="text" name="website" style={{ display: 'none' }} value={typeof formData !== 'undefined' ? formData.website : (typeof form !== 'undefined' ? form.website : '')} onChange={typeof handleChange !== 'undefined' ? handleChange : (typeof handle !== 'undefined' ? handle : () => {})} tabIndex="-1" autoComplete="off" />\n`;
    content = content.replace(/(<form[^>]*>)/g, `$1${hiddenInput}`);
  }

  // 4. Add strict validation to Invictus forms (missing the 6-9 check)
  if (content.includes('e.preventDefault()')) {
    if (!content.includes('/^[6-9]\\d{9}$/.test')) {
      let formVar = content.includes('formData.phone') ? 'formData' : (content.includes('form.phone') ? 'form' : null);
      if (formVar) {
        if (content.includes('setError(\'\'); setLoading(true)')) {
          content = content.replace(/(\s*)(setError\(''\);?\s*setLoading\(true\))/g, `$1    if (!/^[6-9]\\d{9}$/.test(${formVar}.phone)) { setError('Phone number must start with 6, 7, 8, or 9'); return }$1$2`);
        }
      }
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
    updatedCount++;
  }
});
console.log(`Total updated: ${updatedCount}`);
