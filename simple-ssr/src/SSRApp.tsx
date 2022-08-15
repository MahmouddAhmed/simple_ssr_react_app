// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from "react";
const SSRApp = (props: any) => {
  const [result, setResult] = useState({ content: props.data });
  return (
    <div>
      <h1>{result.content.content} </h1>
    </div>
  );
};

export default SSRApp;
