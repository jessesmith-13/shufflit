// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const { resolver: { sourceExts } } = config;

config.transformer.babelTransformerPath = require.resolve("./transformer.js");
config.resolver.sourceExts = [...sourceExts, "scss", "sass"];

module.exports = config;