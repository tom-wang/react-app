module.exports = {
    "preset": "jest-puppeteer",
    globalSetup: './test/puppeteer_setup.js',
    globalTeardown: './test/puppeteer_teardown.js',
    testEnvironment: './test/puppeteer_environment.js',
}

