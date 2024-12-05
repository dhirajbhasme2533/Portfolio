export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        youngserif: ['youngserif', 'sans-serif'], // Ensure the font is properly imported
      },
      colors: {
        pblue: "#0078FF",    // Electric Blue
        ppurple: "#A020F0",  // Neon Purple
        plime: "#A7FF0B",    // Cyber Lime
        pgray: "#7c7c7c",    // Slate Gray
        ppink: "#FF007A",    // Digital Pink
        pblack: "#242424",   // Digital Pink (same as ppink)
        dp: "#FF6384"
      },

      animation: {
        'gradient-bg': 'gradient 6s ease infinite',
        'circle-blue-bg': 'cbbg 4.5s ease infinite',
        'circle-pink-bg': 'pbbg 4.5s ease infinite',
        'circle-lime-bg': 'lbbg 4.5s ease infinite',
        'circle-purple-bg': 'pubbg 4.5s ease infinite'
      },

      keyframes: {
        gradient: {
          '0%, 100%': {
            background: "#FF007A",
          },
          '50%': {
            background: "#0078FF",
          },
        },

        // blue circle
        cbbg: {
          '0%, 100%': {
            background: "#0078FF",
            scale: 10
          },
          '50%': {
            background: "#A020F0",
            scale: 20
          },
        },

        // pink circle
        pbbg: {
          '0%, 100%': {
            background: "#FF007A",
            scale: 10
          },
          '50%': {
            background: "#A7FF0B",
            scale: 20
          },
        },

        // lime circle
        lbbg: {
          '0%, 100%': {
            background: "#A7FF0B",
            scale: 10
          },
          '50%': {
            background: "#FF007A",
            scale: 20
          },
        },

        // purple circle
        pubbg: {
          '0%, 100%': {
            background: "#A020F0",
            scale: 10
          },
          '50%': {
            background: "#0078FF",
            scale: 20
          },
        },
      },
    },
  },
  plugins: [],
};