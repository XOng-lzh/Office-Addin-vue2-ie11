module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
      "targets": {
        "browsers": ["ie 11"]
      },
      "useBuiltIns": "entry",
       "corejs": 3
     }
    ]
  ]
}
