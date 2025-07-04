#!/bin/bash

echo "🐍 Venomous Sound Logo Showcase"
echo "================================"
echo ""

echo "1. Toxic Green Venom Gradient"
node dist/index.js "VENOMOUS" venom
echo ""

echo "2. Dark Venom (Deep Green)"
node dist/index.js "VENOMOUS" venom-dark -d horizontal
echo ""

echo "3. Purple Venom (Royal Poison)"
node dist/index.js "VENOMOUS" venom-purple -d diagonal
echo ""

echo "4. Toxic Lime - Diagonal"
node dist/index.js "VENOMOUS" toxic -d diagonal
echo ""

echo "5. Poison Gradient (Purple → Green)"
node dist/index.js "VENOMOUS" poison -d horizontal
echo ""

echo "6. VENOMOUS - Filled Blocks"
node dist/index.js "VENOMOUS" venom --filled
echo ""

echo "7. SOUND - Cyan Wave"
node dist/index.js "SOUND" sound-wave --filled
echo ""

echo "8. VENOMOUS SOUND - Multi-line"
node dist/index.js "VENOMOUS
SOUND" venom --filled
echo ""

echo "9. VENOMOUS SOUND - Purple Venom"
node dist/index.js "VENOMOUS
SOUND" venom-purple --filled
echo ""

echo "10. VS - Abbreviated"
node dist/index.js "VS" venom-purple --filled
echo ""

echo "11. Matrix Style (Classic Green)"
node dist/index.js "VENOMOUS" matrix --filled
echo ""