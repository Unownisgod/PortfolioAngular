const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/api/project" // Make sure this is included
    ],
    target: "https://127.0.0.1:5016",
    secure: false,
    changeOrigin: true, // Added this line
    logLevel: "debug", // Added this line
    pathRewrite: {
      '^/api': '/api'
    }
  }
]

module.exports = PROXY_CONFIG;
