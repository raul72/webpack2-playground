module.exports = {
  // https://www.postcss.parts/
  plugins: {
    // https://www.rucksackcss.org/
    // bunch of utilities
    'rucksack-css': {},
    // http://lostgrid.org/
    // powerful grid system
    'lost': {},
    // https://github.com/postcss/autoprefixer
    // https://github.com/browserslist/browserslist#queries
    // Write CSS rules without vendor prefixes
    'autoprefixer': {},
    // https://cssnano.co/
    // modern CSS compression
    'cssnano': {},
  }
}
