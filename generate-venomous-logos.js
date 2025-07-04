#!/usr/bin/env node

import { render, renderFilled } from './dist/lib.js';
import fs from 'fs/promises';
import path from 'path';

const LOGO_DIR = './Venomous-logos';

async function generateLogos() {
  // Ensure directory exists
  await fs.mkdir(LOGO_DIR, { recursive: true });

  const logos = [
    // Single word "VENOMOUS"
    { text: 'VENOMOUS', palette: 'venom', filled: false, direction: 'vertical', filename: 'venomous-vertical.txt' },
    { text: 'VENOMOUS', palette: 'venom', filled: false, direction: 'horizontal', filename: 'venomous-horizontal.txt' },
    { text: 'VENOMOUS', palette: 'venom', filled: false, direction: 'diagonal', filename: 'venomous-diagonal.txt' },
    { text: 'VENOMOUS', palette: 'venom', filled: true, filename: 'venomous-filled.txt' },
    
    // Different venom palettes
    { text: 'VENOMOUS', palette: 'venom-dark', filled: true, filename: 'venomous-dark-filled.txt' },
    { text: 'VENOMOUS', palette: 'venom-purple', filled: false, direction: 'horizontal', filename: 'venomous-purple.txt' },
    { text: 'VENOMOUS', palette: 'toxic', filled: false, direction: 'diagonal', filename: 'venomous-toxic.txt' },
    { text: 'VENOMOUS', palette: 'poison', filled: true, filename: 'venomous-poison-filled.txt' },
    
    // "SOUND" variations
    { text: 'SOUND', palette: 'sound-wave', filled: false, direction: 'horizontal', filename: 'sound-wave.txt' },
    { text: 'SOUND', palette: 'sound-wave', filled: true, filename: 'sound-wave-filled.txt' },
    
    // Multi-line "VENOMOUS SOUND"
    { text: 'VENOMOUS\nSOUND', palette: 'venom', filled: false, direction: 'vertical', filename: 'venomous-sound-vertical.txt' },
    { text: 'VENOMOUS\nSOUND', palette: 'venom', filled: false, direction: 'diagonal', filename: 'venomous-sound-diagonal.txt' },
    { text: 'VENOMOUS\nSOUND', palette: 'venom', filled: true, filename: 'venomous-sound-filled.txt' },
    { text: 'VENOMOUS\nSOUND', palette: 'venom-purple', filled: true, filename: 'venomous-sound-purple-filled.txt' },
    { text: 'VENOMOUS\nSOUND', palette: 'poison', filled: false, direction: 'horizontal', filename: 'venomous-sound-poison.txt' },
    
    // Classic palettes on Venomous
    { text: 'VENOMOUS', palette: 'matrix', filled: true, filename: 'venomous-matrix-filled.txt' },
    { text: 'VENOMOUS', palette: 'fire', filled: false, direction: 'horizontal', filename: 'venomous-fire.txt' },
    
    // Abbreviated versions
    { text: 'VS', palette: 'venom', filled: true, filename: 'vs-venom-filled.txt' },
    { text: 'VS', palette: 'venom-purple', filled: true, filename: 'vs-purple-filled.txt' },
    { text: 'V/S', palette: 'poison', filled: false, direction: 'horizontal', filename: 'vs-poison.txt' },
  ];

  console.log(`🐍 Generating ${logos.length} Venomous Sound logos...\n`);

  for (const logo of logos) {
    try {
      let content;
      
      if (logo.filled) {
        // For filled logos, we need to capture the output differently
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
  const readme = `# Venomous Sound Logos

Generated using oh-my-logo with custom venom-themed color palettes.

## Custom Palettes

- **venom**: Toxic green gradient (#22c55e → #84cc16 → #a3e635)
- **venom-dark**: Dark to bright green (#064e3b → #047857 → #10b981)
- **venom-purple**: Deep purple venom (#581c87 → #7c3aed → #a855f7)
- **sound-wave**: Cyan sound wave (#0891b2 → #06b6d4 → #22d3ee)
- **toxic**: Lime toxic gradient (#65a30d → #84cc16 → #bef264)
- **poison**: Purple to green poison (#7c3aed → #22c55e → #84cc16)

## View Logos

To view the ASCII art logos with colors in your terminal:

\`\`\`bash
# ASCII art versions
node ../dist/index.js "VENOMOUS" venom
node ../dist/index.js "VENOMOUS" venom-purple -d horizontal
node ../dist/index.js "VENOMOUS" toxic -d diagonal

# Filled block versions
node ../dist/index.js "VENOMOUS" venom --filled
node ../dist/index.js "VENOMOUS" venom-dark --filled

# Multi-line version
node ../dist/index.js "VENOMOUS\\nSOUND" venom --filled

# Abbreviated
node ../dist/index.js "VS" venom-purple --filled
\`\`\`

## Files

- \`venomous-*.txt\` - Single word VENOMOUS in various styles
- \`sound-*.txt\` - SOUND word with sound-wave palette
- \`venomous-sound-*.txt\` - Two-line "VENOMOUS SOUND" logos
- \`vs-*.txt\` - Abbreviated VS logos

## Color Meanings

- **Green palettes** (venom, toxic): Represents the toxic/venomous aspect
- **Purple palettes** (venom-purple): Royal poison, mysterious danger
- **Cyan palette** (sound-wave): Represents the sound/audio aspect
- **Poison palette**: Transitions from purple danger to toxic green
`;

  await fs.writeFile(path.join(LOGO_DIR, 'README.md'), readme);
  console.log('\n📝 Created README.md');
  console.log(`\n🎉 All logos generated in ${LOGO_DIR}/`);
}

// Run the generator
generateLogos().catch(console.error);