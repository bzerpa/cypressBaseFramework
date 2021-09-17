const cucumber = require('cypress-cucumber-preprocessor').default

const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')
 
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on('file:preprocessor', cucumber())
}

