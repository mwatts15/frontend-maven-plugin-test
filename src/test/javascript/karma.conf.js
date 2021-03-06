process.env.CHROME_BIN = '/usr/bin/chromium'
module.exports = function(config) {
    config.set({
        basePath: '../../..',
        frameworks: ['jasmine'],
        files: [
            'src/main/javascript/*.js',
            'src/test/javascript/*.js'
        ],
        exclude: ['src/test/javascript/karma.conf*.js'],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ]
    });
};
