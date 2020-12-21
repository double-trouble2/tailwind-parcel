module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./dist/**/*.html'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1.5rem",
    }
  },
  variants: {},
  plugins: [],
}

// screens: {
//       sm: { min: "640px", max: "640px" },
//       md: { min: "768px", max: "768px" },
//       lg: { min: "1024px", max: "1024px" },
//       xl: { min: "1280px", max: "1280" },
//       "2xl": { min: "1536px", max: "1536" }
//     }