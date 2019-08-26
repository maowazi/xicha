const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/bnner', {
        target: 'http://localhost:8000',
        secure: false,
        changeOrigin: true
    }));
    app.use(proxy('/address', {
        target: 'http://localhost:8000',
        secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": "/"
        // },
    }));
    app.use(proxy('/menu', {
        target: 'http://localhost:8000',
        secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": "/"
        // },
    }));
};