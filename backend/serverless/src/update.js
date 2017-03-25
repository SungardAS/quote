"use strict";

const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.quote !== "string" || typeof data.checked !== "boolean") {
    console.error("Validation Failed");
    callback(new Error("Couldn't update the quote."));
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    },
    ExpressionAttributeNames: {
      "#quote_text": "text"
    },
    ExpressionAttributeValues: {
      ":text": data.quote,
      ":checked": data.checked,
      ":updatedAt": timestamp
    },
    UpdateExpression: "SET #quote_text = :text, checked = :checked, updatedAt = :updatedAt",
    ReturnValues: "ALL_NEW"
  };

  // update the todo in the database
  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error("Couldn't update the quote."));
      return;
    }
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes)
    };
    callback(null, response);
  });
};
