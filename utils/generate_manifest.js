const manifest = require('../src/manifest.json')
const fileSystem = require('fs')
const path = require('path')
const env = require('./env')

// generates the manifest file using the package.json informations
manifest.description = process.env.npm_package_description
manifest.version = process.env.npm_package_version

if (env.NODE_ENV === 'development') {
  manifest.content_security_policy = "script-src 'self' 'unsafe-eval'; object-src 'self'"
}

fileSystem.writeFileSync(
  path.join(__dirname, '../build/manifest.json'),
  JSON.stringify(manifest)
)
