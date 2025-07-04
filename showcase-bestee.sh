#!/bin/bash

echo "🎨 bESTEE Logo Showcase"
echo "======================"
echo ""

echo "1. Custom bESTEE Gradient (Purple → Pink → Blue)"
node dist/index.js "bESTEE" bestee
echo ""

echo "2. bESTEE Neon (Cyan → Emerald → Purple) - Horizontal"
node dist/index.js "bESTEE" bestee-neon -d horizontal
echo ""

echo "3. bESTEE Glow (Amber → Red) - Diagonal"
node dist/index.js "bESTEE" bestee-glow -d diagonal
echo ""

echo "4. bESTEE Night (Dark → Indigo → Purple)"
node dist/index.js "bESTEE" bestee-night
echo ""

echo "5. bESTEE Filled Blocks"
node dist/index.js "bESTEE" bestee --filled
echo ""

echo "6. bESTEE bROWSER - Multi-line Neon"
node dist/index.js "bESTEE
bROWSER" bestee-neon --filled
echo ""

echo "7. Matrix Style"
node dist/index.js "bESTEE" matrix --filled
echo ""

echo "8. Fire Gradient"
node dist/index.js "bESTEE" fire -d horizontal
echo ""