// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

// получаем дефолтную конфигурацию
const defaultConfig = getDefaultConfig(__dirname);

// если вы используете модули с расширением .cjs (как в Firebase v11+), 
// Metro должен его понимать
defaultConfig.resolver.sourceExts.push('cjs');

// ОТКЛЮЧАЕМ новую политику packageExports, 
// чтобы Metro мог подхватывать нужный файл из firebase/auth
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;
