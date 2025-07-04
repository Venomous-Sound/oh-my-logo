#!/usr/bin/env node

import { render, renderFilled } from './dist/lib.js';
import fs from 'fs/promises';
import path from 'path';

const LOGO_DIR = './bESTEE-logos';

async function generateLogos() {
  // Ensure directory exists
  await fs.mkdir(LOGO_DIR, { recursive: true });

  const logos = [
    // Single line logos
    { text: 'bESTEE', palette: 'bestee', filled: false, direction: 'vertical', filename: 'bestee-vertical.txt' },
    { text: 'bESTEE', palette: 'bestee', filled: false, direction: 'horizontal', filename: 'bestee-horizontal.txt' },
    { text: 'bESTEE', palette: 'bestee', filled: false, direction: 'diagonal', filename: 'bestee-diagonal.txt' },
    { text: 'bESTEE', palette: 'bestee', filled: true, filename: 'bestee-filled.txt' },
    
    // Different color palettes
    { text: 'bESTEE', palette: 'bestee-neon', filled: true, filename: 'bestee-neon-filled.txt' },
    { text: 'bESTEE', palette: 'bestee-glow', filled: false, direction: 'horizontal', filename: 'bestee-glow.txt' },
    { text: 'bESTEE', palette: 'bestee-night', filled: false, direction: 'vertical', filename: 'bestee-night.txt' },
    
    // Multi-line versions
    { text: 'bESTEE\nbROWSER', palette: 'bestee', filled: false, direction: 'diagonal', filename: 'bestee-browser-diagonal.txt' },
    { text: 'bESTEE\nbROWSER', palette: 'bestee-neon', filled: true, filename: 'bestee-browser-neon-filled.txt' },
    
    // Classic palettes
    { text: 'bESTEE', palette: 'purple', filled: true, filename: 'bestee-purple-filled.txt' },
    { text: 'bESTEE', palette: 'fire', filled: false, direction: 'horizontal', filename: 'bestee-fire.txt' },
    { text: 'bESTEE', palette: 'ocean', filled: false, direction: 'diagonal', filename: 'bestee-ocean.txt' },
    { text: 'bESTEE', palette: 'matrix', filled: true, filename: 'bestee-matrix-filled.txt' },
  ];

  console.log(`🎨 Generating ${logos.length} bESTEE logos...\n`);

  for (const logo of logos) {
    try {
      let content;
      
      if (logo.filled) {
        // For filled logos, we need to capture the output differently
        // Since renderFilled writes directly to stdout
        console.log(`Generating filled logo: ${logo.filename}`);
        await renderFilled(logo.text, { palette: logo.palette });
        content = `[Filled logo - run 'node dist/index.js "${logo.text}" ${logo.palette} --filled' to see]`;
      } else {
        content = await render(logo.text, {
          palette: logo.palette,
          direction: logo.direction || 'vertical'
        });
      }
      
      const filepath = path.join(LOGO_DIR, logo.filename);
      await fs.writeFile(filepath, content);
      console.log(`✅ Saved: ${logo.filename}`);
    } catch (error) {
      console.error(`❌ Error generating ${logo.filename}:`, error.message);
    }
  }

  // Create a README for the logos
  const readme = `# bESTEE Logos

Generated using oh-my-logo with custom color palettes.

## Custom Palettes

- **bestee**: Purple → Pink → Blue gradient
- **bestee-neon**: Cyan → Emerald → Purple
- **bestee-glow**: Amber → Red gradient  
- **bestee-night**: Dark → Indigo → Light Purple

## View Logos

To view the ASCII art logos with colors in your terminal:

\`\`\`bash
# ASCII art versions
node ../dist/index.js "bESTEE" bestee
node ../dist/index.js "bESTEE" bestee-neon -d horizontal
node ../dist/index.js "bESTEE" bestee-glow -d diagonal

# Filled block versions
node ../dist/index.js "bESTEE" bestee --filled
node ../dist/index.js "bESTEE" bestee-neon --filled

# Multi-line version
node ../dist/index.js "bESTEE\\nbROWSER" bestee --filled
\`\`\`

## Files

- \`bestee-*.txt\` - ASCII art versions with different gradients
- \`bestee-*-filled.txt\` - Block character versions
- \`bestee-browser-*.txt\` - Two-line "bESTEE bROWSER" logos
`;

  await fs.writeFile(path.join(LOGO_DIR, 'README.md'), readme);
  console.log('\n📝 Created README.md');
  console.log(`\n🎉 All logos generated in ${LOGO_DIR}/`);
}

// Run the generator
generateLogos().catch(console.error);