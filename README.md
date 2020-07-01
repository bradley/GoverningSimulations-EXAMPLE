# Strelka: The Terraforming - Governing Simulations
[![Netlify Status](https://api.netlify.com/api/v1/badges/fb4c1f39-9388-4af6-afb3-5ddf3bc134e5/deploy-status)](https://app.netlify.com/sites/governing-simulations/deploys)

This is the Dashboard Site for Strelka's Governing Simulations Team within Strelka's The Terraforming program.

## About the Codebase
This codebase supplies a Single Page Application (SPA) written primarily in React and compiled using Babel and Webpack.

Importantly, the Webpack configuration allows for two "entry points" into the Application, whereby the Application is able to render the main user-facing Site in addition to a smaller set of endpoints able to render unique content outside of the main Site UI, for use in external `<iframe>`s or widgets. Both codebases are written with the components existing in `app/webpack/`, but are bundled separately, with their own routing, in order to keep bundled javascripts minimal and self-contained. To read the code more closely, begin with the entry files in `app/webpack/entry/`, or in `webpack.common.js` for Webpack configuration.

The Application is compiled virtually and served to `localhost` using `webpack-dev-server` during development. Once source code is merged into the main `master` branch remotely (i.e.; on GitHub), Netlify takes over - automatically running the build script and deploying to the live site.

## Setup

#### Installing the Application
Open your terminal and navigate to the directory where you would like to install the Application. After doing so, clone the Application from GitHub by running the following command:

```
git clone git@github.com:bradley/GoverningSimulations
```

#### ENV
Create a new file in the root of this directory called `.env`. After doing so, copy the contents of `.env.example` into it and do the following:
1. Replace the value for `GOOGLE_ANALYTICS_TRACKING_ID` with the actual Google Analytics Tracking ID. You may need to get this from a team member.
2. Replace the value for `GOOGLE_CLIENT_EMAIL` with the actual Google Client Email. This is used by our Netlify function `serveVslReport`. You may need to get this from a team member.
3. Replace the value for `GOOGLE_PRIVATE_KEY` with the actual Google Private Key. This is used by our Netlify function `serveVslReport`. You may need to get this from a team member.
4. Replace the value for `GOOGLE_SPREADSHEET_ID` with the actual Google Spreadsheet ID. This is used by our Netlify function `serveVslReport`. You may need to get this from a team member.

#### Installing Necessary Packages
From your terminal, and within the same directory where you have installed the Application, install the necessary packages by running the following command:

```
npm install
```

## Starting the Application
To start the Application locally, run the following command and then open `http://localhost:8080` in your browser (if you have issues, see the "Netlify Dev" section below):

```
netlify dev
```

## Developing the Application
Because we use Netlify to automatically deploy changes made to the `master` branch on GitHub, it is important that all development work take place within feature branches. Once a feature branch is complete, you may open a Pull Request on GitHub, requesting to have the feature branch's code merged into the `master` branch.

## Deploying the Application to Production
As stated above, all development work should take place within feature branches, and _not_ within the `master` branch.

In order to deploy code changes to the Production Site, developers should open a Pull Request on GitHub, requesting to have their feature branch's code merged into the `master` branch. Once a Pull Request into `master` has been opened, Netlify will attempt to perform a "preview" build and deployment, in the form of a "Deploy Preview". Within the Pull Request, you will be able to see the status of this "Preview Deploy", being notified of any build errors that may occur. If and once the "Deploy Preview" is successfully completed, you can either choose to preview the site on a special domain at Netlify, or go ahead and merge the Feature Branch into `master`. Once merged, Netlify will automatically deploy the current state of `master` to the Production Site.

*Important: Always wait for Netlify to successfully complete the "Deploy Preview" for a Pull Request before merging your Feature Branch into `master`. The merge button should be green and say "Merge pull request", with the message "All checks have passed" displayed at the top.*

## Deploying Lambda Functions
Our app uses [AWS Lambda Functions](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) for some of its background work. See the contents of `./functions` for more information and instructions on the development and deployment of our AWS Lambda Functions that are not managed by Netlify.

## Deploying Netlify Managed Lambda Functions
Our app uses Netlify-managed [AWS Lambda Functions](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) (See [Netlify Functions](https://docs.netlify.com/functions/overview/)) for some of its background work. See the contents of `./functionsNetlify` for more information and instructions on the development and deployment of our AWS Lambda Functions that are managed by Netlify.

## Netlify Dev
At the time of this writing (April 24th, 2020), there are [critical issue](https://github.com/netlify/cli/issues/827) with the most recent Netlify Dev (also referred to as `netlify-cli`) which cause debilitating issues when attempting to run the application locally. That said, because we need our Netlify-managed functions to be hosted and accessible locally during development, we do want to use it. To that end we are currently forced to use a workaround:

First, you need to navigate to the internal `node_modules` folder for your current Node version. If you have the setup correctly, you should be using `.nodenv` for Node version management, and node version `10.13.0`:

```
cd ~/.nodenv/versions/10.13.0/lib/node_modules
```

Once there, run the following:
```
git clone https://github.com/netlify/cli.git && cd cli && git checkout raees/dev-config-improvements && npm i && npm link
```

This should get you setup to use the `netlify dev` command for the time being (if you have issues, try checking back at [the thread that originall inspired this solution](https://github.com/netlify/cli/issues/827)).

## A Note About VSL and Number.MAX_SAFE_INTEGER
There is a small concern about the ongoing global growth of total VSL and its impact on our ability to calculate and display numbers accurately against JavaScript's `Number.MAX_SAFE_INTEGER`. Essentially, as the global VSL approaches **9 Quadrillion Dollars** - this should be _a long time off_ but who knows... - we will need to be aware of it and of our apps limitations.
