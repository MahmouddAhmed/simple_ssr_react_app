import React, { useEffect, useState } from "react";
import config from "./config.json";
import axios from "axios";

function App() {
  const [err, setErr] = useState(false);
  const [result, setResult] = useState({ content: { content: "" } });
  useEffect(() => {
    const getData = async () => {
      const url = config.SSRApiStack.apiurl;
      try {
        let result = await axios.get(url);
        setResult({ content: result.data });
      } catch (error) {
        console.log(error);
        setErr(true);
      }
    };
    getData();
  }, []);
  if (err) {
    return <div>Error {err}</div>;
  } else {
    return (
      <div>
        <h1>{result.content.content}</h1>
      </div>
    );
  }
}

export default App;
