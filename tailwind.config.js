/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        darker: "#1A2A3A",
        dark: "#002642",
        light: "#B2D8D8",
      },
      orange: {
        darker: "#FF6600",
        dark: "#FC7A57",
        light: "#E89A59"
      },
      green: {
        darker: "#127475",
      },
      gray: {
        darker: "#747578",
        light: "#EAEAEA",
      },
      yellow: {
        darker: "#B9A44C",
        dark: "#F0CF65",
        light: "#F3C969"
      }
    },
    fontFamily: {
      heading: ['Inconsolata', 'monospace'],
      sub_heading: ['JetBrains\\Mono', 'monospace'],
      body: ['Fira\\Code', 'monospace'],
      special: ['Space\\Mono', 'monospace']
    },
    extend: {
      
    },
  },
  plugins: [],
}
