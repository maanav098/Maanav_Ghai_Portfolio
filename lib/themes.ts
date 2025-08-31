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
    primary: '#6366F1', // Indigo 500 - modern + premium
    secondary: '#06B6D4', // Cyan 500 - tech/AI vibe
    accent: '#16A34A', // Emerald 600 - positive growth
    background: '#FAFAFB', // Soft off-white, avoids harsh white
    surface: '#FFFFFF', // Pure white with soft shadow
    text: '#111827', // Deep neutral gray, not pure black
    textSecondary: '#4B5563', // Medium gray for descriptions
    border: '#E5E7EB', // Light gray, very subtle
    shadow: 'rgba(0,0,0,0.05)', // Soft shadow
    glow: '0 0 20px rgba(99, 102, 241, 0.15)' // Subtle indigo glow
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
