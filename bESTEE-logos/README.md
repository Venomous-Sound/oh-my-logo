# bESTEE Logos

Generated using oh-my-logo with custom color palettes.

## Custom Palettes

- **bestee**: Purple → Pink → Blue gradient
- **bestee-neon**: Cyan → Emerald → Purple
- **bestee-glow**: Amber → Red gradient  
- **bestee-night**: Dark → Indigo → Light Purple

## View Logos

To view the ASCII art logos with colors in your terminal:

```bash
# ASCII art versions
node ../dist/index.js "bESTEE" bestee
node ../dist/index.js "bESTEE" bestee-neon -d horizontal
node ../dist/index.js "bESTEE" bestee-glow -d diagonal

# Filled block versions
node ../dist/index.js "bESTEE" bestee --filled
node ../dist/index.js "bESTEE" bestee-neon --filled

# Multi-line version
node ../dist/index.js "bESTEE\nbROWSER" bestee --filled
```

## Files

- `bestee-*.txt` - ASCII art versions with different gradients
- `bestee-*-filled.txt` - Block character versions
- `bestee-browser-*.txt` - Two-line "bESTEE bROWSER" logos
