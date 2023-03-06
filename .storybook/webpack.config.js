const path = require("path");

module.exports = ({ config }) => {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        util: false,
    };

    return config;
};
