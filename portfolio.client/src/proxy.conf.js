const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "http://localhost:5235", // Changed to match the server's port
    secure: false
  }
]

module.exports = PROXY_CONFIG;
