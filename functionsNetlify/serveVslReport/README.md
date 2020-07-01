# Lambda Function: Serve VSL Report
This is an [AWS Lambda Function](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html), managed as a [Netlify Function](https://docs.netlify.com/cli/get-started/#unbundled-javascript-function-deploys), that our application uses to serve as a basic JSON API for delivering our computed daily VSL data from Google Sheets.

## Setup

#### Installing Necessary Packages
From your terminal, install the necessary packages by running the following command within this directory:

```
npm install
```

#### ENV
Due to the constraints of the Netlify-managed Lambda function development process, `ENV` variables necessary for this function _are managed within the root-level `.env` file of this project_ during development. On production, these variables are defined within the main Netlify admin console for this project. See the root-level `README.md` for more on the configured `ENV` variables.

## Deploying the Lambda Function
Netlify-managed Lambda functions are automatically deployed along with the application whenever changes are commited to the Master branch. During development their endpoints are available on the `localhost` port configured in the root-level `netlify.toml` file.
