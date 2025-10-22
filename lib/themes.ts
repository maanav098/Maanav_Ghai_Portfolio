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
    primary: '#0071e3',      // Apple blue
    secondary: '#86868b',    // Apple gray
    accent: '#06c',          // Bright accent blue
    background: '#ffffff',   // Pure white
    surface: '#f5f5f7',      // Light gray surface
    text: '#1d1d1f',         // Near black text
    textSecondary: '#86868b', // Secondary gray text
    border: '#d2d2d7',       // Light border
    shadow: 'rgba(0, 0, 0, 0.04)', // Subtle shadow
    glow: '0 0 20px rgba(0, 113, 227, 0.15)' // Apple blue glow
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
