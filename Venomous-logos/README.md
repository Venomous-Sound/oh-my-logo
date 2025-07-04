# Venomous Sound Logos

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

```bash
# ASCII art versions
node ../dist/index.js "VENOMOUS" venom
node ../dist/index.js "VENOMOUS" venom-purple -d horizontal
node ../dist/index.js "VENOMOUS" toxic -d diagonal

# Filled block versions
node ../dist/index.js "VENOMOUS" venom --filled
node ../dist/index.js "VENOMOUS" venom-dark --filled

# Multi-line version
node ../dist/index.js "VENOMOUS\nSOUND" venom --filled

# Abbreviated
node ../dist/index.js "VS" venom-purple --filled
```

## Files

- `venomous-*.txt` - Single word VENOMOUS in various styles
- `sound-*.txt` - SOUND word with sound-wave palette
- `venomous-sound-*.txt` - Two-line "VENOMOUS SOUND" logos
- `vs-*.txt` - Abbreviated VS logos

## Color Meanings

- **Green palettes** (venom, toxic): Represents the toxic/venomous aspect
- **Purple palettes** (venom-purple): Royal poison, mysterious danger
- **Cyan palette** (sound-wave): Represents the sound/audio aspect
- **Poison palette**: Transitions from purple danger to toxic green
