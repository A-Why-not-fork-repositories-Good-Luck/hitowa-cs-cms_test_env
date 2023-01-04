module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  branch: 'origin',
  src:'src',
  dest: 'docs',
  public: 'public',
  themeConfig: {
    navbar: false
  },
  patterns: [
    'docs/*.md',
    'docs/**/*.md',
    '.vupress/**/*.vue',
    '!amplify/**',
    '!tools/**'
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}
