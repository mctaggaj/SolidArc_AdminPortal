# SolidArc_AdminPortal

# Getting Started

Note: You must have bower and gulp globally installed on your machine. If you don't already have them, run `npm install -g bower gulp`.

To download, package, and serve the application, run the following commands. The packaged application will be found in `dist/package`.

```bash
  git clone https://github.com/mctaggaj/SolidArc_AdminPortal.git
  cd SolidArc_AdminPortal
  cp serverConfig.json{.default,} # Edit serverConfig.json to specify
  # a custom host/port
  npm install # Get dependencies, package, watch, then run the server
```

## Troubleshooting

If you run into problems when `npm install` complains about a deprecated node version or something, try the following commands:

```bash
  which node # If there is no output following this command, execute the next command
  sudo ln -s /usr/bin/nodejs /usr/bin/node
```

# Running the Server

After making modifications to the source code, you can package it again and run the server by running the `gulp` command.

To run the server without building again, run `npm run server` or `gulp run-server`.
