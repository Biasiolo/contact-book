// src/styles/theme.ts
export const theme = {
    colors: {
      background: '#000000',
      primary: '#5a4dc7',     
      secondary: '#6b19d6',   
      accent: '#F6C90E',      
      text: '#b7b8b6',          
      textLight: '#ffffff',      
      danger: '#E74C3C'       
    },
    fonts: {
      main: "'Inter', sans-serif", 
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    },
    spacing: (factor: number) => `${0.25 * factor}rem`, 
    borderRadius: '6px',
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px',
    }
  };
  