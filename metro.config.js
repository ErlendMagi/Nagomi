// Bundle content.db (prebuilt corpus index) and the starter-pack zips as
// static assets so first launch works with zero network.
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)
config.resolver.assetExts.push('db', 'zip')

module.exports = config
