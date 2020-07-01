#!/usr/bin/env node
const vslSerializer = require("./lib/serializers/VSL/vslSerializer.js");
const SheetService = require("./lib/services/GoogleSheets/SheetService.js");

const serveVslReport = async (event, context) => {
  return new Promise((resolve, reject) => {
    const sheetService = new SheetService();

    sheetService.getValues()
      .then(vslData => {
        const serializedVslData = vslSerializer(vslData);

        resolve({
          statusCode: 200,
          headers: {
            //'Cache-Control': 'public, s-maxage=3600', // Cache for up to 1 hour.
            'Content-Type': "application/json; Charset=UTF-8",
          },
          body: JSON.stringify(serializedVslData)
        });
      })
      .catch(error => {
        resolve({
          statusCode: 500,
          headers: {
            'Content-Type': "application/json; Charset=UTF-8",
          },
          body: JSON.stringify({ error: "Something went wrong." })
        });
      });
  });
};

exports.handler = serveVslReport
