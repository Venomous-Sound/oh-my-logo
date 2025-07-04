export const PALETTES = {
  'grad-blue': ['#4ea8ff', '#7f88ff'],
  'sunset': ['#ff9966', '#ff5e62', '#ffa34e'],
  'dawn': ['#00c6ff', '#0072ff'],
  'nebula': ['#654ea3', '#eaafc8'],
  'mono': ['#f07178', '#f07178'],
  'ocean': ['#667eea', '#764ba2'],
  'fire': ['#ff0844', '#ffb199'],
  'forest': ['#134e5e', '#71b280'],
  'gold': ['#f7971e', '#ffd200'],
  'purple': ['#667db6', '#0082c8', '#0078ff'],
  'mint': ['#00d2ff', '#3a7bd5'],
  'coral': ['#ff9a9e', '#fecfef'],
  'matrix': ['#00ff41', '#008f11'],
  // Custom bESTEE palettes
  'bestee': ['#9333ea', '#ec4899', '#3b82f6'], // Purple -> Pink -> Blue
  'bestee-glow': ['#f59e0b', '#ef4444', '#dc2626'], // Amber -> Red gradient
  'bestee-night': ['#1e293b', '#6366f1', '#a78bfa'], // Dark -> Indigo -> Light Purple
  'bestee-neon': ['#22d3ee', '#10b981', '#a855f7'], // Cyan -> Emerald -> Purple
  // Custom Venomous Sound palettes
  'venom': ['#22c55e', '#84cc16', '#a3e635'], // Toxic green gradient
  'venom-dark': ['#064e3b', '#047857', '#10b981'], // Dark to bright green
  'venom-purple': ['#581c87', '#7c3aed', '#a855f7'], // Deep purple venom
  'sound-wave': ['#0891b2', '#06b6d4', '#22d3ee'], // Cyan sound wave
  'toxic': ['#65a30d', '#84cc16', '#bef264'], // Lime toxic gradient
  'poison': ['#7c3aed', '#22c55e', '#84cc16'] // Purple to green poison
} as const;

export type PaletteName = keyof typeof PALETTES;

export function resolvePalette(name: string): string[] | null {
  const paletteName = name as PaletteName;
  const palette = PALETTES[paletteName];
  return palette ? [...palette] : null;
}

export function getPaletteNames(): string[] {
  return Object.keys(PALETTES);
}

export function getDefaultPalette(): string[] {
  return [...PALETTES['grad-blue']];
}

export function getPalettePreview(name: PaletteName): string {
  const colors = PALETTES[name];
  return colors.join(' → ');
}