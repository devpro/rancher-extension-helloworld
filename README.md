# Rancher Extension Samples

You'll find here samples to get to know Rancher Extensions, a feature introduced in Rancher v2.7.

## How this repository has been made

* Follow [Getting started](https://rancher.github.io/dashboard/extensions/extensions-getting-started)

```bash
# installs yarn
npm install -g yarn

# creates skeleton
yarn create @rancher/app rancher-extensions-samples
cd rancher-extensions-samples
rm .vscode/settings.json

# installs packages
yarn install

# fix: installs packages if Node.js version is too recent as expected version is 16 (https://nodejs.org/en/download/releases/)
yarn install --ignore-engines

# (optional) shows why a package is required
yarn why @achrinza/node-ipc
```
