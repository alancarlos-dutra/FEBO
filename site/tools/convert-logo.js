const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoSvg = path.join(__dirname, '..', 'assets', 'logo', 'logo.svg');
const outDir = path.join(__dirname, '..', 'assets', 'logo');

if (!fs.existsSync(logoSvg)) {
  console.error('Logo SVG not found at', logoSvg);
  process.exit(1);
}

(async () => {
  try {
    await sharp(logoSvg).resize(32, 32).png().toFile(path.join(outDir, 'favicon-32.png'));
    await sharp(logoSvg).resize(16, 16).png().toFile(path.join(outDir, 'favicon-16.png'));
    console.log('Generated favicon-32.png and favicon-16.png in', outDir);
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
})();
