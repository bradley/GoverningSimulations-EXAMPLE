#!/usr/bin/env bash
source config.sh

echo "Beginning deploy"
echo "Making /dist directory"
mkdir -p dist
echo "Compressing files into /dist directory"
zip -q -r dist/ecdcDataFetch.zip * .[^.]*
echo "Deploying compressed files to AWS"
aws lambda update-function-code \
  --function-name $lambdaFunctionName \
  --zip-file fileb://./dist/ecdcDataFetch.zip
echo "Removing /dist directory"
rm -r dist
echo "Deploy complete"
