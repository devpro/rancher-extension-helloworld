# Rancher Extension Samples

You'll find here samples to get to know Rancher Extensions, a feature introduced in Rancher v2.7.

## What are the samples

* [Hello world](pkg/helloworld/README.md)

## How to reproduce this repository

* Follow [Getting started](https://rancher.github.io/dashboard/extensions/extensions-getting-started)

```bash
# creates skeleton
yarn create @rancher/app rancher-extensions-samples
cd rancher-extensions-samples
rm .vscode/settings.json
```

* Look at existing extensions
  * [kubewarden/ui](https://github.com/kubewarden/ui)
  * [rancher/elemental-ui](https://github.com/rancher/elemental-ui)
  * [rancher/ui-plugin-examples](https://github.com/rancher/ui-plugin-examples)

## How to run locally the samples

* Start a Rancher instance

```bash
# starts a container on Rancher 2.7
docker run --name local_rancher --privileged -d --restart=unless-stopped -p 3001:443 -p 3000:80 rancher/rancher:v2.7-head

# grabs the generated password
docker logs local_rancher  2>&1 | grep "Bootstrap Password:"
```

* Open the local Rancher instance on [localhost:3001](https://localhost:3001) in a browser and enabled Extensions from the Configuration sub-menu

* Run a local environment

```bash
# installs packages
yarn install

# runs the dev environment
API=https://localhost:3001 yarn dev
```

* Open the instance in a browser (the link is displayed in previous command output)

* Clean-up

```bash
# installs packages
yarn install

# stops Rancher container
docker stop local_rancher

# deletes Rancher container
docker rm local_rancher
```

## How to troubleshoot issues

* `yarn` must be installed, if not run:

```bash
# installs yarn globally on the system
npm install -g yarn
```

* By default, `yarn install` won't work on recent Node.js version (for exemple in March 2023, expected version if 16, doesn't work Node.JS 19, see [releases](https://nodejs.org/en/download/releases/)), in that case run:

```bash
# ignores engine check
yarn install --ignore-engines

# (optional) shows why a package is required
yarn why @achrinza/node-ipc
```
