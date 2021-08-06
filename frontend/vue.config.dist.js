var path = require('path');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    outputDir: "../app/webroot",
    devServer: {
        host: 'localhost',
        // writeToDisk: true,
        writeToDisk: (filePath) => {
            return /^(?!.*(hot-update)).*/.test(filePath);
        },
        disableHostCheck: true,
        https: true,
    },
    indexPath: "../View/Layouts/spa.ctp",
    assetsDir: "js/vue"
}