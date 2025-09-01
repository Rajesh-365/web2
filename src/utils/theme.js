export const theme = {
  colors: {
    primary: {
      gradient: 'from-blue-600 to-indigo-600',
      gradientHover: 'from-blue-700 to-indigo-700',
      text: 'text-blue-600',
      border: 'border-blue-600',
      background: 'bg-blue-600',
    },
    secondary: {
      gradient: 'from-purple-600 to-pink-600',
      gradientHover: 'from-purple-700 to-pink-700',
      text: 'text-purple-600',
      border: 'border-purple-600',
      background: 'bg-purple-600',
    },
    heading: {
      light: 'text-gray-900',
      dark: 'dark:text-white',
    },
    text: {
      light: 'text-gray-600',
      dark: 'dark:text-gray-300',
    },
    background: {
      light: 'bg-white',
      dark: 'dark:bg-gray-900',
      lightHover: 'hover:bg-gray-50',
      darkHover: 'dark:hover:bg-gray-800',
    }
  },
  fonts: {
    heading: {
      base: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
      section: 'text-2xl sm:text-3xl md:text-4xl font-bold leading-tight',
      subsection: 'text-xl sm:text-2xl font-bold leading-tight',
    },
    body: {
      base: 'text-base sm:text-lg leading-relaxed',
      large: 'text-lg sm:text-xl md:text-2xl leading-relaxed',
      small: 'text-sm sm:text-base leading-relaxed',
    }
  },
  spacing: {
    section: 'py-12 sm:py-16 md:py-20',
    container: 'px-4 sm:px-6 lg:px-8',
  },
  animations: {
    gradient: 'animate-gradient',
    hover: 'transition-all duration-300 hover:scale-[1.02]',
    fadeIn: 'transition-all duration-1000',
  }
}; 