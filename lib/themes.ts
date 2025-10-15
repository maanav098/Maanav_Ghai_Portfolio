export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
  border: string
  shadow: string
  glow: string
}

// Define ThemeType to only include 'light' and 'dark'
export type ThemeType = 'light' | 'dark'

export const themes: Record<ThemeType, ThemeColors> = {
  light: {
    primary: '#5A7D7C', // Sage green
    secondary: '#A9C1A3', // Soft moss accent
    accent: '#8FB996', // Fresh leafy highlight
    background: '#F5F6F1', // Warm neutral backdrop
    surface: '#FFFFFF', // Clean cards against sage base
    text: '#2F3E46', // Deep slate-green for readability
    textSecondary: '#607274', // Muted sage-gray for supporting copy
    border: '#DAE3DB', // Gentle sage border
    shadow: 'rgba(47, 62, 70, 0.08)', // Soft natural shadow
    glow: '0 0 18px rgba(138, 171, 145, 0.25)' // Sage glow
  },
  // The previous 'futuristic' theme is now the 'dark' theme
  dark: {
    primary: '#00d4ff', // Bright cyan for futuristic feel
    secondary: '#7c3aed', // Purple for contrast
    accent: '#fbbf24', // Golden accent
    background: '#000000', // Pure black
    surface: '#0a0a0a', // Slightly lighter black for cards
    text: '#ffffff', // White text
    textSecondary: '#a1a1aa', // Light grey for secondary text
    border: '#1f2937', // Subtle dark border
    shadow: '0 0 40px rgba(0, 212, 255, 0.3)', // Cyan glow shadow
    glow: '0 0 50px rgba(0, 212, 255, 0.5)' // Strong cyan glow
  }
}
