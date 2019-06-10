const path = require('path');

module.exports = {
    paths: function (paths, env) {        
        paths.appIndexJs = path.resolve(__dirname, 'src/home/index.jsx');
        paths.appSrc = path.resolve(__dirname, 'src');
        paths.appPublic = path.resolve(__dirname, 'fixtures/manifest');
        paths.appHtml = path.resolve(__dirname, 'fixtures/manifest/index.html');
        return paths;
    },
}