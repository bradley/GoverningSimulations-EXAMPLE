# Lambda Function: Get ECDC Report
This is an [AWS Lambda Function](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) for fetching and persisting Covid-19 data from the [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/) (ECDC) to a special Sheet in Google Sheets.

ECDC data is parsed and compared against "Value of a Statistical Life" (VSL) data, which this codebase takes primarily from the report, "Income Elasticities and Global Values of a Statistical Life", by W. Kip Viscusi and Clayton J. Masterman at the Society for Benefit-Cost Analysis, 2017.

## About the Codebase
This codebase follows the [AWS Lambda Deployment Guidelines](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html) for building a [AWS Lambda Function](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) with dependencies. Following these guidelines, the main executable that will be used by AWS can be found in `index.js` at the root of this directory.

The executable is configured to run periodically by AWS, and when ran (manually or automatically) will perform the following steps:

1. Fetch most recent ECDC Covid-19 report, as CSV.
2. Parse the fetched CSV from streamed data.
3. Extract total deaths by countries, filtering out any country not represented in our VSL data (see mapping between ECDC countries and VSL countries in `/lib/data/ECDC/ecdc_countries_to_vsl_countries.json`), and coercing the country name to the one specified in our VSL data. The final output of this step is an object holding a count of "total deaths" for every country we capture.
4. Build and format the data necessary for persisting our extracted ECDC and VSL report data to Google Sheets.
5. Persist full report to Google Sheets, clearing previous data.

For the time being, **this function sends text messages** to a single developer (see the `ENV` variable, `TWILIO_PHONE_NUMBER_TO`) upon the completion or failure of its work.

***NOTE: IT IS IMPORTANT TO REMEMBER THAT RUNNING THIS EXECUTABLE WILL BUILD THE COMPLETE REPORT FROM ALL HISTORICAL ECDC DATA, COMPLETELY OVERWRITING EXISTING DATA IN THE GOOGLE SHEETS SHEET.***

## About Daily Job
We use [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) to trigger this function once daily. In our CloudWatch console, a rule, `Strelka-GoverningSimulations-CloudWatch-dailyTrigger` is configured which fires once daily using the Cron expression, `0 13 * * ? *` which equates to running once daily, at `13:00 GMT`. `13:00 GMT` is 1:00pm GMT time, or 9:00am EST time.

Along with our Twilio integration, the configured (see the `ENV` variable, `TWILIO_PHONE_NUMBER_TO`) message recipient should receive either an error or a completion text at around 9:00am EST daily.

## Setup

#### Installing Necessary Packages
From your terminal, install the necessary packages by running the following command within this directory:

```
npm install
```

#### ENV
Create a new file in the root of this directory called `.env`. After doing so, copy the contents of `.env.example` into it and do the following:
1. Leave `NODE_CONFIG_DIR` as is. This tells the `config` package where to find environment variables for our environment in the node application.
2. Leave `ECDC_REPORT_URL` as is. This tells the executable where to retrieve ECDC reports from.
3. Replace the value for `GOOGLE_SPREADSHEET_ID` with the actual Google Sheet ID. You may need to get this from a team member.
4. Replace `TWILIO_AUTH_TOKEN` with the auth token for the Twilio account we are sending SMS messages from.
5. Replace `TWILIO_PHONE_NUMBER_FROM` with the phone number assigned to the Twilio account we are sending SMS messages from. This is the phone number Twilio gives to the account or that we have otherwise configured, and will be the "from" number that the recipient sees.
6. Replace `TWILIO_PHONE_NUMBER_TO` with the phone number of the developer (we currently just send these messages to a single developer) who should receive the SMS alerts this function sends.
7. Replace `TWILIO_SID` with the SID for the phone number assigned to the Twilio account we are sending SMS messages from.

#### Google Sheets Configuration
Create a new folder in the root of this directory called `.data`. After doing so, create a new file within it called `google_sheets_credentials.json`. You should populate this file with the appropriate configuration JSON, which you may need to get from a team member.

Note: While the `google_sheets_credentials.js` file is included in the `.gitignore` file, preventing it from being remotely stored in git, it will automatically deploy to AWS as part of the deployment flow.

If you are doing this for the first time, you can follow these steps to set up the executable for a new Google Sheets Sheet:
1. Make a new Google Sheets Sheet.
2. [Create or Select a project](https://console.developers.google.com/flows/enableapi?apiid=sheets.googleapis.com), accepting the terms, and click **Agree and continue** then **Go to credentials**.
3. Create credentials for the **Google Sheets API** for a **Web server** using **Application data**. We will not be using Google App Engine or Google Computing Engine, so you can select **No, I'm not using them**. Click **What credentials do I need?** to continue.
4. Add a **Service account name** and grant it the Role of **Project > Editor**.
5. Click **Continue** to download the JSON file containing your credentials.
6. Copy/paste the Google Sheet ID from the the URL of your spreadsheet and paste it into your `.env` file.
7. Copy/paste the `client_email` address from the JSON file and **Share** your spreadsheet with the client email address.
8. Paste the downloaded credentials JSON file into the `google_sheets_credentials.json` file and save.

#### AWS CLI
Our workflow will involve deploying updates to your Lambda Functions from the command line, and as such you will need the [aws-cli](https://aws.amazon.com/cli/) installed on your machine. Fortunately, the `aws-cli` is very easy to install.

To keep things brief, this guide is just going to follow the easy route mac users have available to them through [homebrew](https://brew.sh/). With homebrew installed on a mac, run the following command to install the `aws-cli`:

```
brew install awscli
```

If you're not on a mac or don't want to use homebrew, you can follow the [official installation steps](https://github.com/awslabs/aws-shell).

Next you will need to configure the `aws-cli` to work with your account. To do so, you will need an Access Key and a Secret Access Key for the AWS account you want to use when interacting with the `aws-cli`.

1. Begin by navigating to [`https://console.aws.amazon.com/`](https://console.aws.amazon.com/) and logging into your amazon account.
2. From the AWS Management Console page, enter "IAM" into the "Find Services" search, and hit enter or select "IAM" from the dropdown that appears.
3. You will be taken to the "Identity and Access Management (IAM)" page. On the left-hand side of the screen select "Users".
4. On the "Users" page, either choose an existing user or create a new one.
5. Once you have selected or created a new user, you will be on the "User Summary" page. Under the "Access keys" section, select "Create access key".
6. From the modal that opens, note the Access Key ("Access key ID") and Secret Access Key ("Secret access key") values that are displayed. You should either keep this window open or jot these values down somewhere, as we will be using them shortly and this is the only time AWS will make the Secret Access Key available to you.

Using the Access Key and Secret Access Key you gathered in the previous step, you should now configure your `aws-cli` utility. From your terminal, run the following:

```
aws configure
```

You will be asked to provide values for your "AWS Access Key ID", "AWS Secret Access Key", "Default region name", and "Default output format". The first two should be self explanatory. If you know your default region and/or the preferred output format you can fill those in as well. If you need more information on those options, you can view the details [here](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html) and [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output.html), respectively.

#### Making the Lambda Function Executable
In order to perform local development and deploy changes, you will need to ensure our NPM script has access to execute the deployment script. Within this directory, run the following command from your terminal:

```
chmod +x ./deploy.sh
```

## Deploying the Lambda Function
When ready to deploy, run the following command from your terminal:

```
npm run deploy
```

The build script temporarily zips the contents of this directory into a compressed file that is usable by AWS. See the [AWS Lambda Deployment Guide](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html) for more information on why this is necessary.

The build script will peform the following steps:
1. Create a temporary directory at `./dist`.
3. Compress the full contents of this directory into a zip file, placing it in the `./dist` directory.
4. Use the `aws-cli` to update the remote Lambda Function on AWS.
5. Remove the temporary directory at `./dist`.
