module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https=://www.somedomain.com",
                changeOrigin: true
            }
        }
    }
};
