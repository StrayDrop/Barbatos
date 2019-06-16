module.exports = {
    overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
        if (pluginOptions.preText) {
            console.warn(pluginOptions.preText);
        }

        console.warn(JSON.stringify(webpackConfig, null,4));

        // Always return the config object.
        return cracoConfig;
    }
};