// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

exports.handler = async (event) => {
  const responseCode = 200;
  const responseBody = { content: "Hello World!" };
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };
  const response = {
    statusCode: responseCode,
    headers: headers,
    body: JSON.stringify(responseBody),
  };
  return response;
};
