import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setState] = useState([]);

  const extractDataFromApi = (urlPassed = "", payload = "", method = "GET",headers={}) => {
    let url = new URL(urlPassed);
    let data ={
        headers: headers,
        method: method,
      }
    if(method==="GET")
    for (let i in payload) {
      url.searchParams.append(i, payload[i]);
    }
    else
    data["body"]=JSON.stringify(payload)

    fetch(url, data)
      .then((res) => res.json())
      .then((dataFetched) => setState(dataFetched));
  };

  return { data, extractDataFromApi };
};

export default useFetch;
